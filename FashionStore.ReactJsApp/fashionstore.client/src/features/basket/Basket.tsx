import { Grid } from "@mui/material";
import BasketSummary from "./BasketSummary";
import BasketTable from "./BasketTable";

const Bastket = () => {

	return (
		<>
			<BasketTable />
			<Grid container>
				<Grid item xs={6}></Grid>
				<Grid item xs={6}>
					<BasketSummary />
				</Grid>
			</Grid>
		</>
	)
}

export default Bastket;