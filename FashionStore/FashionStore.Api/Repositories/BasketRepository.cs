using FashionStore.Api.Controllers.Data;
using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Interfaces.IRepos;
using FashionStore.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace FashionStore.Api.Repositories
{
    public class BasketRepository : BaseRepository<Basket>, IBasketRepository
    {
        public BasketRepository(FashionStoreDbContext fashionStoreDbContext) : base(fashionStoreDbContext)
        {
        }

        public async Task<Basket> RetrieveBasket(string buyerId)
        {
            var basket = await _fashionStoreDbContext.Baskets
                .Include(p => p.BasketItems)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(item => item.BuyerId == buyerId);

            return basket;
        }
        public async Task<Product> GetProduct(int productId)
        {
            var product = await _fashionStoreDbContext.Products.FirstOrDefaultAsync(item => item.Id == productId);
            return product;
        }
    }
}
