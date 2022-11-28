using FashionStore.Api.Controllers.Data;
using FashionStore.Api.Interfaces.IRepos;

namespace FashionStore.Api.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private IBasketRepository _basketRepository;
        private readonly FashionStoreDbContext _fashionStoreDbContext;

        public UnitOfWork(FashionStoreDbContext fashionStoreDbContext)
        {
            _fashionStoreDbContext = fashionStoreDbContext;
        }

        public IBasketRepository BasketRepository
        {
            get { return _basketRepository ?? new BasketRepository(_fashionStoreDbContext); }
        }
        public void Commit()
        {
            _fashionStoreDbContext.SaveChanges();
        }

        public async Task<bool> CommitAsync()
        {
           return await _fashionStoreDbContext.SaveChangesAsync() > 0;
        }

        public void Rollback()
        {
            _fashionStoreDbContext.Dispose();
        }

        public async Task RollbackAsync()
        {
            await _fashionStoreDbContext.DisposeAsync();
            throw new NotImplementedException();
        }
    }
}
