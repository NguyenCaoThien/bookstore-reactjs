import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { flexbox, minWidth } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';

const createData = (product: string, price: string, quantity: number, subTotal: string) => {
	return { product, price, quantity, subTotal };
}

const row = [
	createData('Product', "$15", 5, "$75"),
	createData('Product', "$15", 5, "$75"),
	createData('Product', "$15", 5, "$75"),
];

const Bastket = () => {

	return (
		<TableContainer sx={{display: "flex",
		justifyItems: "center", justifyContent: "center",
		marginTop: 5}}>
			<Table sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						<TableCell>
							Product
						</TableCell>
						<TableCell>
							Price
						</TableCell>
						<TableCell>
							Quantity
						</TableCell>
						<TableCell>
							Subtotal
						</TableCell>
						<TableCell>

						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{row.map((row) => (
						<TableRow key={row.product}>
							<TableCell>
								{row.product}
							</TableCell>
							<TableCell align="left">
								{row.price}
							</TableCell>
							<TableCell align="left">
								{row.quantity}
							</TableCell>
							<TableCell align="left">
								{row.subTotal}
							</TableCell>
							<TableCell>
								<DeleteIcon sx={{ color: "red" }}></DeleteIcon>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default Bastket;