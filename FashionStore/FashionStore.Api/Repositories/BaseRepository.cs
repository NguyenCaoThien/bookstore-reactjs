using FashionStore.Api.Controllers.Data;
using FashionStore.Api.Interfaces.IRepos;
using Microsoft.EntityFrameworkCore;

namespace FashionStore.Api.Repositories
{
    public class BaseRepository<TEntity>: IBaseRepository<TEntity> where TEntity: class
    {
        internal DbSet<TEntity> dbSet;
        internal FashionStoreDbContext _fashionStoreDbContext;

        public BaseRepository(FashionStoreDbContext fashionStoreDbContext)
        {
            _fashionStoreDbContext = fashionStoreDbContext;
            dbSet = fashionStoreDbContext.Set<TEntity>();
        }

        public virtual async Task<TEntity> GetById(object id)
        {
          return await dbSet.FindAsync(id);
        }

        public virtual async Task<IEnumerable<TEntity>> GetAlls()
        {
            return await dbSet.ToListAsync();
        }

        public virtual async Task AddAsync(TEntity entity)
        {
           await dbSet.AddAsync(entity);
        }

        public virtual async Task Delete(object id)
        {
            TEntity entity = await dbSet.FindAsync(id);
            Delete(entity);
        }

        public virtual void Delete(TEntity entity)
        {
            if (_fashionStoreDbContext.Entry(entity).State == EntityState.Detached)
            {
                dbSet.Attach(entity);
            }

            dbSet.Remove(entity);
        }
    }
}
