using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Dtos;
using FashionStore.Api.Interfaces.IRepos;
using FashionStore.Api.Interfaces.IServices;
using FashionStore.Api.Models;
using Microsoft.AspNetCore.Http;

namespace FashionStore.Api.Services
{
    public class BasketServices : IBasketServices
    {
        private IUnitOfWork _unitOfWork;
        const string BUYER_ID_KEY = "buyerId";      

        public BasketServices(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        #region Private Methods
        private async Task AddBasket(Basket basket)
        {
            await _unitOfWork.BasketRepository.AddAsync(basket);
            await _unitOfWork.CommitAsync();
        }       
        #endregion

        #region Public Methods
        public async Task<Basket> RetrieveBasket(string buyerId)
        {
            var basket = await _unitOfWork.BasketRepository.RetrieveBasket(buyerId);
            return basket;
        }

        public async Task<Product> GetProduct(int productId)
        {
            return await _unitOfWork.BasketRepository.GetProduct(productId);
        }
        public async Task<Basket> CreateBasket(string buyerId, HttpResponse httpResponse)
        {
            if (string.IsNullOrEmpty(buyerId))
            {
                var cookieOpts = new CookieOptions()
                {
                    IsEssential = true,
                    Expires = DateTime.Now.AddDays(30),
                    SameSite = SameSiteMode.Strict,
                    HttpOnly = false
                };

                buyerId = Guid.NewGuid().ToString();
                httpResponse.Cookies.Append(BUYER_ID_KEY, buyerId, cookieOpts);
            }

            Basket basket = new Basket(buyerId);
            await AddBasket(basket);
            return basket;
        }

        public async Task<BasketDto> AddItemToBasket(
            string buyerId, int productId, int quantity, HttpResponse httpResponse)
        {
            var basket = await RetrieveBasket(buyerId) ?? await CreateBasket(buyerId, httpResponse);
            var product = await GetProduct(productId);
            if (product == null)
            {
                return new BasketDto();
            }

            basket.AddItem(product, quantity);
            bool isSaved = await _unitOfWork.CommitAsync();
            return isSaved ? new BasketDto(basket) : new BasketDto();
        }

        public async Task<bool> ReduceBasketItem(string buyerId, int productId, int quantity)
        {
            var basket = await RetrieveBasket(buyerId);
            var product = await GetProduct(productId);
            if (product == null)
            {
                return false;
            }

            basket.ReduceBasketItem(product, quantity);
            return await _unitOfWork.CommitAsync();
        }

        public async Task<bool> RemoveBasketItem(string buyerId, int productId)
        {
            var basket = await RetrieveBasket(buyerId);
            var product = await GetProduct(productId);
            if (product == null)
            {
                return false;
            }

            basket.RemoveBasketItem(product);
            return await _unitOfWork.CommitAsync();
        }
        public string GetBuyerId(HttpRequest httpRequest)
        {
            return httpRequest.Cookies[BUYER_ID_KEY];
        }
        #endregion
    }

}
