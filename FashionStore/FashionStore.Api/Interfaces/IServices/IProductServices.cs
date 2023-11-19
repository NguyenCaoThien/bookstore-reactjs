using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Parameters;
using FashionStore.Api.RequestHelpers;

namespace FashionStore.Api.Interfaces.IServices
{
    public interface IProductServices
    {
        Task<Product> GetProduct(int productId);
        Task<PageList<Product>> GetProducts(ProductParams productParams);
    }
}
