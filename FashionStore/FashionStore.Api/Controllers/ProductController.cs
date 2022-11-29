using FashionStore.Api.Controllers.Data;
using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Interfaces.IServices;
using Microsoft.AspNetCore.Mvc;

namespace FashionStore.Api.Controllers
{
    [ApiController]
    [Route("api/product")]
    public class ProductController : Controller
    {
        private readonly IProductServices _productServices;
        public ProductController(IProductServices productServices)
        {
            _productServices = productServices;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAlls()
        {
            var products = await _productServices.GetAllProducts();
            return Ok(products);
        }       

        [HttpGet("id")]
        public async Task<ActionResult<Product>> GetById(int id)
        {
            var product = await _productServices.GetProduct(id);
            return Ok(product);
        }
    }
}
