using FashionStore.Api.Controllers.Data;
using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Interfaces.IRepos;

namespace FashionStore.Api.Repositories
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(FashionStoreDbContext fashionStoreDbContext): base(fashionStoreDbContext) { }
    }
}
