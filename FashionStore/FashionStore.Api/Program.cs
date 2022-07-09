using FashionStore.Api.Controllers.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<FashionStoreDbContext>(opt =>
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"))
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

app.UseAuthorization();
 
app.MapControllers();

app.Run();
