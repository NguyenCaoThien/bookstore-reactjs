using FashionStore.Api.Controllers.Data;
using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Dtos;
using FashionStore.Api.Interfaces.IServices;
using FashionStore.Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace FashionStore.Api.Controllers
{

    [ApiController]
    [Route("api/basket")]
    public class BasketController : Controller
    {
        private readonly IBasketServices _basketServices;

        public BasketController(IBasketServices basketServices)
        {
            _basketServices = basketServices;
        }

        [HttpGet]
        [Route("getbasket")]
        public async Task<IActionResult> GetBasket(string buyerId)
        {
            var basket = await _basketServices.RetrieveBasket(buyerId);
            return Ok(new BasketDto(basket));
        }       

        [HttpPost]
        public async Task<IActionResult> CreateBasket(string buyerId)
        {
            var createdBasket = await _basketServices.CreateBasket(buyerId, Response);
            return Ok(createdBasket);
        }

        [HttpPost]
        [Route("additemtobasket")]
        public async Task<IActionResult> AddItemToBasket(BasketItemDto basketItems)
        {
            var buyerId = _basketServices.GetBuyerId(Request);
            var basketItem = await _basketServices.AddItemToBasket(buyerId, basketItems.ProductId, basketItems.ProductStockQuantity, Response);
            return Ok(basketItem);
        }

        [HttpPost]
        [Route("reducebasketitem")]
        public async Task<IActionResult> ReduceBasketItem(BasketItemDto basketItems)
        {
            var buyerId = _basketServices.GetBuyerId(Request);
            var isReduced = await _basketServices.ReduceBasketItem(buyerId, basketItems.ProductId, basketItems.ProductStockQuantity);
            return Ok(isReduced);
        }
    }
}
