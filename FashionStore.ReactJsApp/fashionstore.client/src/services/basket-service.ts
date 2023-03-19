import { Basket } from "../models/basket";
import { serviceRequest } from "./agent";

const addItemToBasket = async (productId: number, quantity: number) => {
  const requestBody = {
    productId: productId,
    productStockQuantity: quantity,
  };
  return serviceRequest.postAsync(`${basketUrl}/additemtobasket`, requestBody);
};

const getBasket = (buyerId: string): Promise<Basket> => {
  return serviceRequest.getAsync<Basket>(`${basketUrl}/getbasket?buyerId=${buyerId}`);
}

const reduceBasketItem = (productId: number, quantity: number) => {
  const requestBody = {
    productId: productId,
    productStockQuantity: quantity,
  };

  return serviceRequest.postAsync(`${basketUrl}/reducebasketitem`, requestBody)
}

const removeBasketItem = (productId: number) => {
  return serviceRequest.deleteAsync(`${basketUrl}/removebasketitem?productId=${productId}`)
}

const basketUrl = "http://localhost:7005/api/basket";
export const basketServices = {
  addItemToBasket,
  getBasket,
  reduceBasketItem,
  removeBasketItem
};
