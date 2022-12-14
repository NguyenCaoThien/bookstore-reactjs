import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const createData = (product: string, price: string, quantity: number, subTotal: string) => {
	return { product, price, quantity, subTotal };
}

const row = [
	createData('Product', "$15", 5, "$75"),
	createData('Product', "$15", 5, "$75"),
	createData('Product', "$15", 5, "$75"),
];

const BasketTable = () => {

	return (
		<>
			<TableContainer sx={{
				display: "flex",
				justifyItems: "center", justifyContent: "center",
				marginTop: 5
			}}>
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
									<IconButton>
										<RemoveIcon sx={{ color: "red", fontSize: 19 }}></RemoveIcon>
									</IconButton>
									{row.quantity}
									<IconButton>
										<AddIcon sx={{ color: "purple", fontSize: 19 }}></AddIcon>
									</IconButton>
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
		</>
	)
}

export default BasketTable;