import { serviceRequest } from "./agent";

const addItemToBasket = async (productId: number, quantity: number) => {
  const requestBody = {
    productId: productId,
    quantity: quantity,
  };
  return serviceRequest.postAsync(`${basketUrl}/additemtobasket`, requestBody);
};

const basketUrl = "https://localhost:7005/api/basket";
export const basketServices = {
  addItemToBasket,
};
