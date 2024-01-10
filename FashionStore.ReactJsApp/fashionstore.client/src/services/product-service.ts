import { IProductParams, Product } from "../models/product"
import { serviceRequest } from "./agent"

const getProducts = (): Promise<Product[]> => {
	//TODO: TNC: For testing purpose
	// Will be refactor later
	const productParams: IProductParams = {
		orderBy: "price",
		pageNumber: 2,
		pageSize: 5
	}

	const params = new URLSearchParams();
	params.append('pageNumber', productParams.pageNumber.toString());
	params.append('pageSize', productParams.pageSize.toString());
	params.append('orderBy', productParams.orderBy);

	return serviceRequest.getAsync<Product[]>(`${productUrl}/products`, params);
}

const productUrl = 'http://localhost:7005/api/product'
export const productServices = {
	getProducts
}