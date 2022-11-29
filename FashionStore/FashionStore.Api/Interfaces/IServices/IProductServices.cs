using FashionStore.Api.Controllers.Models;

namespace FashionStore.Api.Interfaces.IServices
{
    public interface IProductServices
    {
        Task<Product> GetProduct(int productId);
        Task<IEnumerable<Product>> GetAllProducts();
    }
}
