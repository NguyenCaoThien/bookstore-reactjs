import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";
import { basketServices } from "../../services/basket-service";
import { Basket } from "../../models/basket";
import { getCookie } from "../../commons/common-helper";

const BasketTable = () => {
	const [baskets, setBasket] = useState<Basket>();
	useEffect(() => {
		setBasketInfor();
	}, []);

	const setBasketInfor = async () => {
		const myCookie = getCookie("buyerId");

		if (myCookie == null) {
			return;
		}

		const basketInfor: Basket = await getBasketInfor(myCookie ?? "");
		const newBasket = Object.assign({}, basketInfor);
		setBasket(newBasket);
	}

	const getBasketInfor = async (buyerId: string): Promise<Basket> => {
		return await basketServices.getBasket(buyerId);
	}

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
						{baskets?.basketItemDtos.map((basket) => (
							<TableRow key={basket.id}>
								<TableCell>
									{basket.productName}
								</TableCell>
								<TableCell align="left">
									{basket.productPrice}
								</TableCell>
								<TableCell align="left">
									<IconButton>
										<RemoveIcon sx={{ color: "red", fontSize: 19 }}></RemoveIcon>
									</IconButton>
									{basket.productStockQuantity}
									<IconButton>
										<AddIcon sx={{ color: "purple", fontSize: 19 }}></AddIcon>
									</IconButton>
								</TableCell>
								<TableCell align="left">
									{basket.productPrice * basket.productStockQuantity}
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