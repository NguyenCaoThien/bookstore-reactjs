import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";

const createData = (rowTitle: string, value: string) => {
	return { rowTitle, value };
}

const row = [
	createData('Subtotal', "$75"),
	createData('Delivery fee*', "$75"),
	createData('Total', "$75"),
	createData('*Orders over $100 qualify for free delivery', ""),
];

const BasketSummary = () => {

	return (
		<>
			<TableContainer component={Paper} variant="outlined">
				<Table>
					<TableBody>
						{row.map((row) => (
							<TableRow key={row.rowTitle} sx={{ columnSpan: 1 }}>
								<TableCell colSpan={2}>
									{row.rowTitle}
								</TableCell>
								<TableCell align="right">
									{row.value}
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