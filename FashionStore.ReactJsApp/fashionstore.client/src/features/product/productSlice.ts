import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../models/product";
import { productServices } from "../../services/product-service";

interface IProduct {
	products: Product[],
	status: string;
}

const initialState: IProduct = {
	products: {} as Product[],
	status: ""
}

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload;
		}
	},

	extraReducers: (builder => {
		builder.addCase(getProducts.pending, (state, action) => {
			state.status = 'getProducts' + action.meta.arg;
		});
		builder.addCase(getProducts.fulfilled, (state, action) => {
			console.log("fulllieed")
			state.products = action.payload;
		})
	})
})

export const getProducts = createAsyncThunk<Product[]>(
	'product/getProductAsync', async (_, thunkApi) => {
		try {
			return await productServices.getProducts();
		}
		catch (error: any) {
			return thunkApi.rejectWithValue({ error: error.data })
		}
	}
)