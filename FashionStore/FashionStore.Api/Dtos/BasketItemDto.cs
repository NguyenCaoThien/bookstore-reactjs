using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Models;

namespace FashionStore.Api.Dtos
{
    public class BasketItemDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public string ProductDes { get; set; } = string.Empty;
        public long ProductPrice { get; set; }
        public string ProductPictureUrl { get; set; } = string.Empty;
        public string ProductType { get; set; } = string.Empty;
        public string ProductBrand { get; set; } = string.Empty;
        public int ProductStockQuantity { get; set; }
    }
}
