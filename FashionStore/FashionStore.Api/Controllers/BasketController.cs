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
        public async Task<BasketDto> GetBasket(string buyerId)
        {
            var basket = await _basketServices.RetrieveBasket(buyerId);
            return new BasketDto(basket);
        }       

        [HttpPost]
        public async Task<Basket> CreateBasket(string buyerId)
        {
            return await _basketServices.CreateBasket(buyerId, Response);
        }

        [HttpPost]
        [Route("additemtobasket")]
        public async Task<BasketDto> AddItemToBasket(BasketItem basketItems)
        {
            var buyerId = _basketServices.GetBuyerId(Request);
            string cookie = Request.Cookies["buyerId"];

            return await _basketServices.AddItemToBasket(buyerId, basketItems.ProductId, basketItems.Quantity, Response);
        }
    }
}
