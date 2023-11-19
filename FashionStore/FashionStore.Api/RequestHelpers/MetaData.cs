namespace FashionStore.Api.RequestHelpers
{
    public class MetaData
    {
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int PageSize { get; set; } // Number of items per page
        public int TotalCount { get; set; }
    }
}
