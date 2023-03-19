import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect } from "react";
import { basketServices } from "../../services/basket-service";
import { Basket } from "../../models/basket";
import { getCookie } from "../../commons/common-helper";
import { useStoreContext } from "../../context/StoreContext";
import { BasketItem } from "../../models/basketitem";
import { useDispatch, useSelector } from "react-redux";
import { store, useAppDispatch, useAppSelector } from "../../store/configureStore";
import { addBasketItemAsync, reduceBasketItemAsync, removeBasketItemAsync, setBaskets } from "./basketSlice";

const BasketTable = () => {
	const { basket, } = useAppSelector(state => state.basket)
	const dispatch = useAppDispatch();

	useEffect(() => {
		setBasketInfor();
	}, []);

	const getBasketInfor = async (buyerId: string): Promise<Basket> => {
		return await basketServices.getBasket(buyerId);
	}

	const setBasketInfor = async () => {
		const myCookie = getCookie("buyerId");

		if (myCookie == null) {
			return;
		}

		const basketInfor: Basket = await getBasketInfor(myCookie ?? "");
		const newBasket = Object.assign({}, basketInfor);
		setBaskets(newBasket);
	}

	const onIncreaseItem = async (basketItem: BasketItem) => {
		dispatch(addBasketItemAsync({ productId: basketItem.productId, quantity: 1 }));
	}

	const onDecreaseItem = async (basketItem: BasketItem) => {
		dispatch(reduceBasketItemAsync({ productId: basketItem.productId, quantity: 1 }));
	}

	const removeBasketItem = async (basketItem: BasketItem) => {
		dispatch(removeBasketItemAsync({ productId: basketItem.productId }));
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
						{basket?.basketItemDtos?.map((basket) => (
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
									<IconButton onClick={() => removeBasketItem(basket)}>
										<DeleteIcon sx={{ color: "red" }} ></DeleteIcon>
									</IconButton>
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