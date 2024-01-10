export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	pictureUrl: string;
	type?: string;
	brand: string;
	quantityInStock?: number;
	publicId?: string;
}

export interface IProductParams {
	orderBy: string;
	pageNumber: number;
	pageSize: number;
}