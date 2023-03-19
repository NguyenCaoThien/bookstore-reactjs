import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { Basket } from "../../models/basket";
import { basketServices } from "../../services/basket-service";
import { useAppSelector } from "../../store/configureStore";

interface IBasketState {
	basket: Basket;
	status: string;
}

const initialState: IBasketState = {
	basket: {} as Basket,
	status: ""
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
	},
	extraReducers: (builder => {
		builder.addCase(addBasketItemAsync.pending, (state, action) => {
			state.status = "pendingAddingItem" + action.meta.arg.productId;
		});
		builder.addCase(addBasketItemAsync.fulfilled, (state, action) => {
			state.basket = action.payload;
		})
		builder.addCase(reduceBasketItemAsync.pending, (state, action) => {
			state.status = "pendingReduceItem" + action.meta.arg.productId
		});
		builder.addCase(reduceBasketItemAsync.fulfilled, (state, action) => {
			const { productId, quantity } = action.meta.arg;
			const indexOfReducedItem = state.basket.basketItemDtos.findIndex(x => x.productId == productId);
			if (indexOfReducedItem < 0) {
				return;
			}

			const basketItemQuantity = state.basket.basketItemDtos[indexOfReducedItem].productStockQuantity;
			if (basketItemQuantity === 1) {
				return;
			}

			state.basket.basketItemDtos[indexOfReducedItem].productStockQuantity -= 1;
		});
		builder.addCase(removeBasketItemAsync.pending, (state, action) => {
			state.status = "pendingRemoveItem" + action.meta.arg.productId;
		});
		builder.addCase(removeBasketItemAsync.fulfilled, (state, action) => {
			const productId = action.meta.arg.productId;
			const indexOfRemoveItem = state.basket.basketItemDtos.findIndex(x => x.productId === productId);
			if (indexOfRemoveItem < 0) {
				return;
			}

			state.basket.basketItemDtos.splice(indexOfRemoveItem, 1);
		})
	})
});

export const addBasketItemAsync = createAsyncThunk<Basket, { productId: number, quantity: number }>
	('basket/addBasketItemAsync', async ({ productId, quantity }, thunkApi) => {
		try {
			return await (basketServices.addItemToBasket(productId, quantity));
		}
		catch (err: any) {
			return thunkApi.rejectWithValue({ error: err.data });
		}
	});

export const reduceBasketItemAsync = createAsyncThunk<Basket, { productId: number, quantity: number }>
	('basket/reduceBasketItemAsync', async ({ productId, quantity }, thunkApi) => {
		try {
			return await basketServices.reduceBasketItem(productId, quantity);
		}
		catch (err: any) {
			return thunkApi.rejectWithValue({ error: err.data });
		}
	});

export const removeBasketItemAsync = createAsyncThunk<Basket, { productId: number }>
	('basket/removeBasketItemAsync', async ({ productId }, thunkApi) => {
		try {
			return await basketServices.removeBasketItem(productId);
		}
		catch (error: any) {
			return thunkApi.rejectWithValue({ error: error.data });
		}
	});
export const { basketAddedItem, setBaskets } = basketSlice.actions;