import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { basketSlice } from "../features/basket/basketSlice";
import { productSlice } from "../features/product/productSlice";

export const store = configureStore({
	reducer: {
		basket: basketSlice.reducer,
		product: productSlice.reducer
	}
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

