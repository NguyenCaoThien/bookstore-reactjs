import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductParams } from "../../models/product";
import { productServices } from "../../services/product-service";
import { RootState } from "../../store/configureStore";

interface IProductState {
	products: IProduct[],
	status: string;
	productParams: IProductParams

}
const getAxiosProductParams = (productParams: IProductParams) => {
	const params = new URLSearchParams();
	params.append('pageNumber', productParams.pageNumber.toString());
	params.append('pageSize', productParams.pageSize.toString());
	params.append('orderBy', productParams.orderBy);

	return params;
}

const initProductParams = () => {
	const productParams: IProductParams = {
		orderBy: "price",
		pageNumber: 2,
		pageSize: 5
	}

	return productParams;
}
const initialState: IProductState = {
	products: {} as IProduct[],
	status: "",
	productParams: initProductParams()
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

export const getProducts = createAsyncThunk<IProduct[], void, { state: RootState }>(
	'product/getProductAsync', async (_, thunkApi) => {
		try {
			const params = getAxiosProductParams(thunkApi.getState().product.productParams);
			return await productServices.getProducts(params);
		}
		catch (error: any) {
			return thunkApi.rejectWithValue({ error: error.data })
		}
	}
)