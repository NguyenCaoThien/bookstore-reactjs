import { Basket } from "../models/basket";
import { serviceRequest } from "./agent";

const addItemToBasket = async (productId: number, quantity: number) => {
  const requestBody = {
    productId: productId,
    quantity: quantity,
  };
  return serviceRequest.postAsync(`${basketUrl}/additemtobasket`, requestBody);
};

const getBasket = (buyerId: string): Promise<Basket> => {
  return serviceRequest.getAsync<Basket>(`${basketUrl}/getbasket?buyerId=${buyerId}`);
}

const basketUrl = "http://localhost:7005/api/basket";
export const basketServices = {
  addItemToBasket,
  getBasket
};
