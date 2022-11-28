namespace FashionStore.Api.Interfaces.IRepos
{
    public interface IUnitOfWork
    {
        IBasketRepository BasketRepository { get; }
        void Commit();
        void Rollback();
        Task<bool> CommitAsync();
        Task RollbackAsync();
    }
}
