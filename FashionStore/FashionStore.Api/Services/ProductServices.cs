using FashionStore.Api.Controllers.Models;
using FashionStore.Api.Interfaces.IRepos;
using FashionStore.Api.Interfaces.IServices;
using FashionStore.Api.Parameters;
using FashionStore.Api.RequestHelpers;

namespace FashionStore.Api.Services
{
    public class ProductServices : IProductServices
    {
        private readonly IUnitOfWork _unitOfWork;

        public ProductServices(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        #region Public Methods
        public async Task<Product> GetProduct(int productId)
        {
            return await _unitOfWork.ProductRepository.GetById(productId);
        }

        public async Task<PageList<Product>> GetProducts(ProductParams productParams)
        {
            return await _unitOfWork.ProductRepository.GetProducts(productParams);
        }
        #endregion
    }
}
