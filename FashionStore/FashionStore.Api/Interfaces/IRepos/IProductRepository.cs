using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Parameters;

namespace FashionStore.Api.Interfaces.IRepos
{
    public interface IProductRepository : IBaseRepository<Product>
    {
        Task<IEnumerable<Product>> GetProducts(ProductParams productParams);
    }
}
