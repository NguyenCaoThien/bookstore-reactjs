using FashionStore.Api.Controllers.Models;

namespace FashionStore.Api.Models
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; } = String.Empty;
        public List<BasketItem> BasketItems { get; set; } = new List<BasketItem>();

        public Basket(string buyerId)
        {
            this.BuyerId = buyerId;
        }

        public void AddItem(Product product, int quantity)
        {
            var existedBasket = BasketItems.FirstOrDefault(p => p.ProductId == product.Id);
            if (existedBasket != null)
            {
                existedBasket.Quantity += quantity;
            }
            else
            {
                var basketItem = new BasketItem()
                {
                    Product = product,
                    Quantity = quantity
                };

                BasketItems.Add(basketItem);
            }
        }
    }
}