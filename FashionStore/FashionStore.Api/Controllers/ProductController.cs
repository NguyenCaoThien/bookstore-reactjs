using FashionStore.Api.Controllers.Data;
using FashionStore.Api.Controllers.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FashionStore.Api.Controllers
{
    [ApiController]
    [Route("api/product")]
    public class ProductController : Controller
    {
        private readonly FashionStoreDbContext _storeDbContext;
        public ProductController(FashionStoreDbContext storeDbContext)
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
