import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Product } from "../../models/product";

const ProductList = () => {
	const [products, setProducts] = useState<Product[]>([
	]);

	useEffect(() => {
		axios.get('https://localhost:7005/api/product')
			.then((response) => {
				setProducts(response.data);
			}).catch(error => console.log("error", error));
	}, []);

	if(!products){
		return null;
	}

	return (
			<Grid container spacing={{ xs: 2, md: 3 }}>
				{products.map((product: Product, index: number)=>(			
					<Grid item xs={2} sm={4} md={4} key={index}>
						<ProductCard product={product} />
					</Grid>									
				))}
			</Grid>
	)
}

export default ProductList;