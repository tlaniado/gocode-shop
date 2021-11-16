import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AddToCart from "../components/AddToCart/AddToCart";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((productDetail) => {
        console.log(productDetail);
        setProductDetails(productDetail);
      });
  }, [id]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={productDetails?.image}
          alt={productDetails?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productDetails?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productDetails?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductDetails;
