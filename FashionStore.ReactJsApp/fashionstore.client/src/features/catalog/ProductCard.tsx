import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const ProductCard = ()=>{

	return (
		<Card sx={{maxWidth: 345}}>
			<CardHeader avatar={
				<Avatar sx={{bgcolor: '#2e80bd'}} aria-label="product">
					R
				</Avatar>
			}
			title="Bottle"
			/>
			<CardMedia
			component="img"
			height= "140"
			image = {require("../../assets/images/boot-ang1.png")}
			alt="boot-ang1"
			>
			</CardMedia>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" sx={{color:'rgb(156, 39, 176)'}}>
				$10.00
				</Typography>
				<Typography variant="body2" color="text.secondary">
				TypeScript / Boards
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">ADD TO CARD</Button>
				<Button size="small">VIEW</Button>
			</CardActions>
		</Card>
	)
}

export default ProductCard;