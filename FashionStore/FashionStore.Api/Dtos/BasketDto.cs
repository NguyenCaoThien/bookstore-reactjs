using FashionStore.Api.Models;

namespace FashionStore.Api.Dtos
{
    public class BasketDto
    {
        public int Id { get; set; }
        public string BuyerId { get; set; } = string.Empty;

        public IEnumerable<BasketItemDto> basketItemDtos { get; set; } = new List<BasketItemDto>();

        public BasketDto() { }
        public BasketDto(Basket basket)
        {
            Id = basket.Id;
            BuyerId = basket.BuyerId;
            basketItemDtos = basket.BasketItems.Select(item => new BasketItemDto
            {
                ProductName = item.Product.Name,
                ProductDes = item.Product.Description,
                ProductPrice = item.Product.Price,
                ProductPictureUrl = item.Product.PictureUrl,
                ProductType = item.Product.Type,
                ProductBrand = item.Product.Brand,
                ProductStockQuantity = item.Quantity
            });
        }
    }
}
