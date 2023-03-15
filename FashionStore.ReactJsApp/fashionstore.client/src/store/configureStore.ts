import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { basketSlice } from "../features/basket/basketSlice";

export const store = configureStore({
	reducer: {
		basket: basketSlice.reducer
	}
})
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

