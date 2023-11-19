using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Parameters;
using FashionStore.Api.RequestHelpers;

namespace FashionStore.Api.Interfaces.IRepos
{
    public interface IProductRepository : IBaseRepository<Product>
    {
        Task<PageList<Product>> GetProducts(ProductParams productParams);
    }
}
