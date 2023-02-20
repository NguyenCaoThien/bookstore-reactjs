import { Button, Divider, Grid, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createData } from "../../commons/common-helper";
import { Product } from "../../models/product";


const ProductDetail = () => {
	const [product, setProduct] = useState<Product>();
	const { productId } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:7005/api/product/id?id=${productId}`)
			.then((response) => {
				setProduct(response.data as Product);
			}, error => {
				console.log("error: ", error);
			})
	}, []);

	if (!product) {
		return null;
	}

	const rows = [
		createData("Name", product.name),
		createData("Description", product.description),
		createData("Type", product?.type as string),
		createData("Brand", product.brand),
		createData("Quantity in stock", product?.quantityInStock?.toString() as string)
	];

	return (
		<Grid container spacing={6}>
			<Grid item xs={6}>
				<img src={require(`../../assets${product.pictureUrl}`)} style={{ width: '100%' }}></img>
			</Grid>
			<Grid item xs={6}>
				<Typography variant="h5" component="div">
					{product.name}
				</Typography>
				<Divider></Divider>
				<Typography variant="h4" component="div" sx={{ color: 'rgb(156, 39, 176)' }}>
					${product.price}
				</Typography>
				<TableContainer>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.criteria}>
								<TableCell>
									{row.criteria}
								</TableCell>
								<TableCell>
									{row.data}
								</TableCell>
							</TableRow>
						))}
						<TableCell sx={{ width: "50%" }}>
							<TextField id="product-quantity"
								label="Quantity in cart"
								type="number"
								InputProps={{
									inputProps: {
										min: 0
									}
								}}
							></TextField>
						</TableCell>
						<TableCell>
							<Button variant="contained">Add to cart</Button>
						</TableCell>
					</TableBody>
				</TableContainer>
			</Grid>
		</Grid>
	)
}

export default ProductDetail;