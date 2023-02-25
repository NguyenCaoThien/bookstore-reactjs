import { BasketItem } from "./basketitem";

export interface Basket {
	id: number;
	buyerId: string;
	basketItemDtos: BasketItem[];
}