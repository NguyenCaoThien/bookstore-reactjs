import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../models/product";
import { basketServices } from "../../services/basket-service";
import { setBaskets } from "../basket/basketSlice";

interface Props {
  product: IProduct;
}

const ProductCard = (props: Props) => {
  const dispatch = useDispatch();

  const addItemToCart = async (product: IProduct) => {
    const basket = await basketServices.addItemToBasket(product.id, 1);
    dispatch(setBaskets(basket));
  };

  const { product } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#2e80bd" }} aria-label="product">
            R
          </Avatar>
        }
        title={product.name}
      />
      <CardMedia
        component="img"
        height="140"
        image={require(`../../assets${product.pictureUrl}`)}
        alt="boot-ang1"
      ></CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "rgb(156, 39, 176)" }}
        >
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand + "/" + product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => addItemToCart(product)} size="small">
          ADD TO CARD
        </Button>
        <Button component={NavLink} to={`${product.id}`} size="small">
          VIEW
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
