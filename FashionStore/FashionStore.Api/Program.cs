using FashionStore.Api.Controllers.Data;
using FashionStore.Api.Interfaces.IRepos;
using FashionStore.Api.Interfaces.IServices;
using FashionStore.Api.Repositories;
using FashionStore.Api.Services;
using Microsoft.EntityFrameworkCore;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddTransient<IBasketServices, BasketServices>();
builder.Services.AddTransient<IProductServices, ProductServices>();

builder.Services.AddControllers();
builder.Services.AddDistributedMemoryCache();

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromSeconds(10);
    options.Cookie.HttpOnly = false;
    options.Cookie.IsEssential = true;
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<FashionStoreDbContext>(opt =>
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"))
);
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.AllowAnyHeader();
            policy.AllowAnyMethod();
            policy.AllowCredentials();
            policy.WithOrigins("http://localhost:3000");
        });
}
);
var app = builder.Build();

using(var serviceScope = app.Services.CreateScope())
{
    var service = serviceScope.ServiceProvider;
    var context = service.GetRequiredService<FashionStoreDbContext>();
    var logger = service.GetRequiredService<ILogger<Program>>();

    try
    {
        await context.Database.MigrateAsync();
         DbInitializer.Initialize(context);
    }
    catch(Exception ex)
    {
        logger.LogError("Error during database migration!" + ex.Message);
    }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);
app.UseCookiePolicy();
app.UseAuthorization();
app.UseSession();
 
app.MapControllers();

app.Run();
