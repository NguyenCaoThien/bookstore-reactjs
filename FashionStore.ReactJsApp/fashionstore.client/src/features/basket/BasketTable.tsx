import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect } from "react";

const createData = (product: string, price: string, quantity: number, subTotal: string) => {
	return { product, price, quantity, subTotal };
}

const row = [
	createData('Product', "$15", 5, "$75"),
	createData('Product', "$15", 5, "$75"),
	createData('Product', "$15", 5, "$75"),
];

const getCookie = (name: string): string | null => {
	const cookieString = document.cookie;
	if (cookieString.length === 0) {
		return null;
	}

	const cookies = cookieString.split("; ");
	for (const cookie of cookies) {
		const [cookieName, cookieValue] = cookie.split("=");
		if (cookieName === name) {
			return decodeURIComponent(cookieValue);
		}
	}

	return null;
};

const BasketTable = () => {
	useEffect(() => {
		const myCookie = getCookie("buyerId");
		debugger;
	}, []);

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