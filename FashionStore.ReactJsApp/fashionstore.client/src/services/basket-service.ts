import serviceRequest from "./agent";

const basketServices = {
	addItemToBasket: (buyerId: number, productId: number, quantity: number) => {
		const requestBody = {
			buyerId: buyerId,
			productId: productId,
			quantity: quantity
		}
		return serviceRequest.post(`${basketUrl}/additemtobasket`, requestBody);
	}
}

const basketUrl = "http://localhost:7005/api/basket";
export default basketServices;