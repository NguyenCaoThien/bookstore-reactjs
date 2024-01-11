import { IProduct } from "../models/product"
import { serviceRequest } from "./agent"

const getProducts = (params: URLSearchParams): Promise<IProduct[]> => {
	return serviceRequest.getAsync<IProduct[]>(`${productUrl}/products`, params);
}

const productUrl = 'http://localhost:7005/api/product'
export const productServices = {
	getProducts
}