using BookStore.Api.Controllers.Data;
using BookStore.Api.Controllers.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Api.Controllers
{
    [ApiController]
    [Route("api/product")]
    public class ProductController : Controller
    {
        private readonly BookStoreDbContext _storeDbContext;
        public ProductController(BookStoreDbContext storeDbContext)
        {
            this._storeDbContext = storeDbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetAlls()
        {
            var products = await this._storeDbContext.Products.ToListAsync();
            return Ok(products);
        }       

        [HttpGet("id")]
        public async Task<ActionResult<Product>> GetById(int id)
        {
            var product = await this._storeDbContext.Products.FindAsync(id);
            return Ok(product);
        }

    }
}
