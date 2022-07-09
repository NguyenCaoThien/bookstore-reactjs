using FashionStore.Api.Controllers.Models;
using Microsoft.EntityFrameworkCore;

namespace FashionStore.Api.Controllers.Data
{
    public class FashionStoreDbContext: DbContext
    {
        public FashionStoreDbContext(DbContextOptions options): base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}
