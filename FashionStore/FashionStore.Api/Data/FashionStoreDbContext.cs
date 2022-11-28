using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace FashionStore.Api.Controllers.Data
{
    public class FashionStoreDbContext: DbContext
    {
        public FashionStoreDbContext(DbContextOptions<FashionStoreDbContext> options): base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Basket> Baskets { get; set; }
    }
}
