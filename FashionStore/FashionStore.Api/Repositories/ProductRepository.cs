using FashionStore.Api.Controllers.Data;
using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Extentions;
using FashionStore.Api.Interfaces.IRepos;
using FashionStore.Api.Parameters;
using FashionStore.Api.RequestHelpers;

namespace FashionStore.Api.Repositories
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(FashionStoreDbContext fashionStoreDbContext): base(fashionStoreDbContext) { 
            
        }

        public async Task<IEnumerable<Product>> GetProducts(ProductParams productParams)
        {
            var query = _fashionStoreDbContext.Products.Sort(productParams.OrderBy).AsQueryable();
            var items = await PageList<Product>.ToPageList(query, productParams.PageNumber, productParams.PageSize);

            return items.ToList();
        }
    }
}
