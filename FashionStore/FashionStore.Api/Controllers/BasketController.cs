using FashionStore.Api.Controllers.Data;
using FashionStore.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FashionStore.Api.Controllers
{

    [ApiController]
    [Route("api/basket")]
    public class BasketController : Controller
    {
        private readonly FashionStoreDbContext _fashionStoreDbContext;
        const string BUYER_ID_KEY = "buyerId";

        public BasketController(FashionStoreDbContext context)
        {
            _fashionStoreDbContext = context;
        }

        [HttpGet]
        [Route("getBasket")]
        public async Task<IActionResult> GetBasket(string buyerId)
        {
            var basket = await _fashionStoreDbContext.Baskets
                .Include(p => p.BasketItems)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync();

            return basket != null ? Ok(basket) : NotFound();
        }

        [HttpPost]
        [Route("createBasket")]
        public async Task<IActionResult> CreateBasket(string buyerId)
        {
            if (string.IsNullOrEmpty(buyerId))
            {
                var cookieOpts = new CookieOptions()
                {
                    IsEssential = true,
                    Expires = DateTime.Now.AddDays(30)
                };

                buyerId = Guid.NewGuid().ToString();
                Response.Cookies.Append(BUYER_ID_KEY, buyerId, cookieOpts);
            }

            Basket basket = new Basket(buyerId);
            await _fashionStoreDbContext.AddAsync(basket);
            return Ok(basket);
        }
    }

}
