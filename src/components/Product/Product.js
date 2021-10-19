import "./Product.css";

import React from "react";
import AddToCart from "../AddToCart/AddToCart";
//import AddToCart from "../AddToCart/AddToCart";
//let quantity = 1;

function Product({ imgSrc, name, price, id }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imgSrc} alt="hello" />
      </div>
      <div className="product-info">
        <h5>{name}</h5>
        <h6>{price} $</h6>
        <AddToCart
          imgSrc={imgSrc}
          name={name}
          price={price}
          id={id}
        ></AddToCart>
      </div>
    </div>
  );
}

export default Product;
//    { imgSrc, name, price, id }          <button onClick={incrementCount}>+</button>
//     <button onClick={decrementCount}>-</button>  <AddToCart key={id} id={id} imgSrc={imgSrc} price={price}></AddToCart>
