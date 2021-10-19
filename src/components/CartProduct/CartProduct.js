import React from "react";
import AddToCart from "../AddToCart/AddToCart";

function CartProduct({ id, imgSrc, name, price, quantity }) {
  return (
    <div className="App">
      <img src={imgSrc} alt="hello" />
      <h5>{name}</h5>
      <h6>{price} $</h6>
      <h6>quantity: {quantity}</h6>
      <h6>id: {id}</h6>
      <AddToCart
        imgSrc={imgSrc}
        name={name}
        price={price}
        id={id}
        quantity={quantity}
      ></AddToCart>
    </div>
  );
}
export default CartProduct;
