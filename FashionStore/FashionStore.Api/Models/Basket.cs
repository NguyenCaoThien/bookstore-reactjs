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
    }
}