using FashionStore.Api.RequestHelpers;

namespace FashionStore.Api.Parameters
{
    public class ProductParams : PageListParams
    {
        public string OrderBy { get; set; }
    }
}
