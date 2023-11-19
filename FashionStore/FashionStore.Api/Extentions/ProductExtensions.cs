using FashionStore.Api.Controllers.Models;

namespace FashionStore.Api.Extentions
{
    public static class ProductExtensions
    {
        public static IQueryable<Product> Sort(this IQueryable<Product> query, string orderBy)
        {
            query = orderBy switch
            {
                "price" => query.OrderBy(p => p.Price),
                "priceDesc" => query.OrderByDescending(p => p.Price),
                _ => query.OrderBy(p => p.Name)
            };

            return query;
        }

        public static IQueryable<Product> Search(this IQueryable<Product> query, string searchBy)
        {
            if (string.IsNullOrEmpty(searchBy))
            {
                return query;
            }

            var lowerCaseSearchBy = searchBy.Trim().ToLower();
            return query.Where(p => p.Name.Contains(lowerCaseSearchBy));
        }
    }
}
