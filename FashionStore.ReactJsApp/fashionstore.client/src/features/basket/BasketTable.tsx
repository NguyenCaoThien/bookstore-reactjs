import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext, useEffect, useState } from "react";
import { basketServices } from "../../services/basket-service";
import { Basket } from "../../models/basket";
import { getCookie } from "../../commons/common-helper";
import { useStoreContext } from "../../context/StoreContext";
import { BasketItem } from "../../models/basketitem";

const BasketTable = () => {
	const { basket, setBasket } = useStoreContext();
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

  const onIncreaseItem = async(basketItem: BasketItem) => {
    await basketServices.addItemToBasket(basketItem.productId, 1);
		setBasketInfor();
  }

  const onDecreaseItem = async (basketItem: BasketItem) => {
    await basketServices.reduceBasketItem(basketItem.productId, 1);
    setBasketInfor();
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
						{basket?.basketItemDtos.map((basket) => (
							<TableRow key={basket.id}>
								<TableCell>
									{basket.productName}
								</TableCell>
								<TableCell align="left">
									{basket.productPrice}
								</TableCell>
								<TableCell align="left">
									<IconButton onClick={() => onDecreaseItem(basket)}>
										<RemoveIcon sx={{ color: "red", fontSize: 19 }}></RemoveIcon>
									</IconButton>
									{basket.productStockQuantity}
									<IconButton onClick={() => onIncreaseItem(basket)}>
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