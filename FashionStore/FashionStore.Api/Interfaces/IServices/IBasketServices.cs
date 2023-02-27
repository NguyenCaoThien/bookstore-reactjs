using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Dtos;
using FashionStore.Api.Models;

namespace FashionStore.Api.Interfaces.IServices
{
    public interface IBasketServices
    {
        Task<Basket> RetrieveBasket(string buyerId);
        Task<Product> GetProduct(int productId);
        Task<Basket> CreateBasket(string buyerId, HttpResponse httpResponse);
        Task<BasketDto> AddItemToBasket(string buyerId, int productId, int quantity, HttpResponse httpResponse);
        Task<bool> ReduceBasketItem(string buyerId, int productId, int quantity);
        string GetBuyerId(HttpRequest httpRequest);
    }
}
