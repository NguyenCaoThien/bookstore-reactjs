import { createContext, PropsWithChildren, useState } from "react";
import { Basket } from "../models/basket";

interface StoreContextValue {
	basket: Basket | null,
	setBasket: (basket: Basket) => void;
}

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export const StoreProvider = ({ children }: PropsWithChildren<any>) => {
	const [basket, setBasket] = useState<Basket | null>(null);

	return (
		<StoreContext.Provider value={{ basket, setBasket }}>
			{children}
		</StoreContext.Provider>
	)
};