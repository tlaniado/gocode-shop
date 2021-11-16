import "./Product.css";

import React from "react";
import AddToCart from "../AddToCart/AddToCart";
import { Link } from "react-router-dom";
//import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

//import AddToCart from "../AddToCart/AddToCart";
//let quantity = 1;

function Product({ imgSrc, price, id, title, category }) {
  return (
    <Card className="product-card" sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={imgSrc} alt={title} />
        <CardContent className="product-info">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {price} $
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="product-info">
        <Link to={`/products/${id}`}>
          <Button size="small" color="primary">
            More
          </Button>
        </Link>
        <AddToCart
          imgSrc={imgSrc}
          name={title}
          price={price}
          id={id}
        ></AddToCart>
      </CardActions>
    </Card>
  );
}

export default Product;
//    { imgSrc, name, price, id }          <button onClick={incrementCount}>+</button>
//     <button onClick={decrementCount}>-</button>  <AddToCart key={id} id={id} imgSrc={imgSrc} price={price}></AddToCart>
