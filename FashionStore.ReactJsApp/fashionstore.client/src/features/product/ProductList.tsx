import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { IProduct } from "../../models/product";
import { getProducts } from "./productSlice";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";

const ProductList = () => {
	const { products } = useAppSelector(state => state.product);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [products]);

	return (
		<Grid container spacing={{ xs: 2, md: 3 }}>
			{products.length > 0 && products?.map((product: IProduct, index: number) => (
				<Grid item xs={2} sm={4} md={4} key={index}>
					<ProductCard product={product} />
				</Grid>
			))}
		</Grid>
	)
}

export default ProductList;