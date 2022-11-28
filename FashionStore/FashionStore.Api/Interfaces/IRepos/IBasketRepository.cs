using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Models;

namespace FashionStore.Api.Interfaces.IRepos
{
    public interface IBasketRepository : IBaseRepository<Basket>
    {
        Task<Basket> RetrieveBasket(string buyerId);
        Task<Product> GetProduct(int productId);
    }
}
