import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { Basket } from "../../models/basket";
import { useAppSelector } from "../../store/configureStore";

interface IBasketState {
	basket: Basket;
}

const initialState: IBasketState = {
	basket: {} as Basket
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		setBaskets(state, action) {
			state.basket = action.payload;
		},
		basketAddedItem(state, action) {
			state.basket = action.payload;
		}
	}
})

export const { basketAddedItem, setBaskets } = basketSlice.actions;