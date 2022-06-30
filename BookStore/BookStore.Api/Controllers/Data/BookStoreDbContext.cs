using BookStore.Api.Controllers.Models;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Api.Controllers.Data
{
    public class BookStoreDbContext: DbContext
    {
        public BookStoreDbContext(DbContextOptions options): base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}
