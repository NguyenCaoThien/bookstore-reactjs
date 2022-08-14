import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Product } from "../../models/product";

interface Props{
	product: Product
}

const ProductCard = (props: Props)=>{
	const {product}= props;
	return (
		<Card sx={{maxWidth: 345}}>
			<CardHeader avatar={
				<Avatar sx={{bgcolor: '#2e80bd'}} aria-label="product">
					R
				</Avatar>
			}
			title={product.name}
			/>
			<CardMedia
			component="img"
			height= "140"
			image = {require(`../../assets${product.pictureUrl}`)}
			alt="boot-ang1"
			>
			</CardMedia>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" sx={{color:'rgb(156, 39, 176)'}}>
				${product.price}
				</Typography>
				<Typography variant="body2" color="text.secondary">
				{product.brand + '/' + product.type}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">ADD TO CARD</Button>
				<Button
				  component={NavLink}
					to={`${product.id}`}
					size="small">VIEW</Button>
			</CardActions>
		</Card>

	)
}

export default ProductCard;