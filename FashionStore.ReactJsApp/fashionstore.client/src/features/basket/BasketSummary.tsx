import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useStoreContext } from "../../context/StoreContext";

interface ISumaryInfo {
	rowTitle: string;
	value: string;
}

const createData = (rowTitle: string, value: string) => {
	const sumInfor: ISumaryInfo = {
		rowTitle: rowTitle,
		value: value
	}
	return sumInfor;
}



const BasketSummary = () => {
	const { basket } = useStoreContext();
	const [sumaryInfo, setSumaryInfo] = useState<ISumaryInfo[]>([]);

	useEffect(() => {
		const subTotal = basket?.basketItemDtos.reduce((total: number, item) => {
			return total + (item.productPrice * item.productStockQuantity);
		}, 0);

		const row: ISumaryInfo[] = [
			createData('Subtotal', subTotal?.toString() ?? ""),
			createData('Delivery fee*', "$75"),
			createData('Total', "$75"),
			createData('*Orders over $100 qualify for free delivery', ""),
		];

		setSumaryInfo([...row]);
	}, [basket]);

	return (
		<>
			<TableContainer component={Paper} variant="outlined">
				<Table>
					<TableBody>
						{sumaryInfo.map((sumInfor) => (
							<TableRow key={sumInfor.rowTitle} sx={{ columnSpan: 1 }}>
								<TableCell colSpan={2}>
									{sumInfor.rowTitle}
								</TableCell>
								<TableCell align="right">
									{sumInfor.value}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

export default BasketSummary;