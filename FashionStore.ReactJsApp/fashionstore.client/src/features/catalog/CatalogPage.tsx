import { Autocomplete, FormControl, FormControlLabel, Grid, Paper, Radio, TextField } from "@mui/material";
import ProductList from "./ProductList";

const CatalogPage = () => {

	return (
		<Grid container sx={{ marginTop: 5 }}>
			<Grid item xs={3}>
				<Grid item xs={10}>
					<Paper>
						<TextField label="Search products"
							type={'search'}>

						</TextField>
					</Paper>
				</Grid>
				<Grid item xs={10}>
					<Paper>
						<FormControl>
							<FormControlLabel value="alphabetical" control={<Radio checked/>}
						label="Alphabetical"/>
							<FormControlLabel value="priceHighToLow" control={<Radio/>}
							label="Price - High to low"/>
							<FormControlLabel value="priceLowToHigh" control={<Radio/>}
							label="Price - Low to high"/>
						</FormControl>						
					</Paper>
				</Grid>
			</Grid>
			<Grid item xs={9}>
				<ProductList></ProductList>
			</Grid>
		</Grid>
	);
}

export default CatalogPage;