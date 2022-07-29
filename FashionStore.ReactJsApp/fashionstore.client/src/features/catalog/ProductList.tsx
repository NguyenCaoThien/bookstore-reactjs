import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
let testArr: number[] = [1,2,3,4,5,3,3,3,3,3,3,3,3] as number[];

const ProductList = ()=>{

	const productCards:any = []
	testArr.map((element: number, index: number) => {
		productCards.push(
		<Grid item xs={2} sm={4} md={4} key={index}>
			<ProductCard/>
		</Grid>)
	});

	return (
		<>
		<Grid container spacing={{xs:2, md:3}}>
			{productCards}
		</Grid>
		</>
	)
}

export default ProductList;