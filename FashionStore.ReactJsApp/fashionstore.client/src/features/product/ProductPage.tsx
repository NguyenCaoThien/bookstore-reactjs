import { FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import { Outlet } from "react-router-dom";
import CheckboxWithLabel from "../../components/Checkbox/Checkbox";

const ProductPage = () => {

	return (
		<>
			<Grid container sx={{ marginTop: 5 }} columnSpacing={4}>
				<Grid item xs={3}>
					<Grid item xs={10} sx={{ height: 30 }}>
						<Paper >
							<TextField label="Search products"
								type={'search'}>
							</TextField>
						</Paper>
					</Grid>
					<Grid item xs={10} sx={{ mt: 2, mb: 2 }}>
						<Paper>
							<RadioGroup name="sort-by-radio">
								<FormControl>
									<FormControlLabel value="alphabetical" control={<Radio />}
										label="Alphabetical" />
									<FormControlLabel value="priceHighToLow" control={<Radio />}
										label="Price - High to low" />
									<FormControlLabel value="priceLowToHigh" control={<Radio />}
										label="Price - Low to high" />
								</FormControl>
							</RadioGroup>
						</Paper>
					</Grid>
					<Grid item xs={10} sx={{ mt: 2, mb: 2 }}>
						<Paper>
							<CheckboxWithLabel label="TypeSript" />
						</Paper>
					</Grid>
					<Grid item xs={10}>
						<Paper>
							<CheckboxWithLabel label="Boards" />
						</Paper>
					</Grid>
				</Grid>
				<Grid item xs={9}>
					{/* <ProductList></ProductList> */}
					<Outlet></Outlet>
				</Grid>
			</Grid>
		</>
	);
}

export default ProductPage;