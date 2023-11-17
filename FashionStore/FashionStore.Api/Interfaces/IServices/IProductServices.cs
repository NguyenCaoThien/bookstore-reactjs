using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Parameters;

namespace FashionStore.Api.Interfaces.IServices
{
    public interface IProductServices
    {
        Task<Product> GetProduct(int productId);
        Task<IEnumerable<Product>> GetProducts(ProductParams productParams);
    }
}
