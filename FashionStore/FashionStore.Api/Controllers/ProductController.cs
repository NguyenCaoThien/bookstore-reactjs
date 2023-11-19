using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Interfaces.IServices;
using FashionStore.Api.Parameters;
using FashionStore.Api.RequestHelpers;
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
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts([FromQuery] ProductParams productParams)
        {
            var products = await _productServices.GetProducts(productParams);
            Response.AddPaginationHeader(products.MetaData);

            return Ok(products.ToList());
        }       

        [HttpGet("id")]
        public async Task<ActionResult<Product>> GetById(int id)
        {
            var product = await _productServices.GetProduct(id);
            return Ok(product);
        }
    }
}
