import "./Product.css";
import CartProductsContexts from "../../CartProductsContext";

import React, { useContext } from "react";
import AddToCart from "../AddToCart/AddToCart";
//import AddToCart from "../AddToCart/AddToCart";
//let quantity = 1;

function Product({ imgSrc, name, price, id }) {
  const [cartProduct, setCartProduct] = useContext(CartProductsContexts);

  function incrementCount() {
    let exist = false;
    cartProduct.map((item) => (item.id === id ? (exist = true) : {}));
    // console.log(cartProduct.some((item) => item.id !== id));
    if (!exist) {
      //console.log("not exited");
      setCartProduct([
        {
          image: imgSrc,
          name: name,
          id: id,
          price: price,
          quantity: 1,
        },
        ...cartProduct,
      ]);
    } else {
      console.log(cartProduct);

      setCartProduct(
        cartProduct.map((item) =>
          item.id === id
            ? {
                ...item,
                price: item.price + price,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    }
  }
  function decrementCount() {
    //cartProduct.some((item) => item.id === id && item.quantity === 1)
    let exist = false;
    cartProduct.map((item) =>
      item.id === id && item.quantity === 1 ? (exist = true) : {}
    );
    if (exist) {
      setCartProduct(cartProduct.filter((item) => item.id !== id));
    } else {
      if (cartProduct.some((item) => item.id === id)) {
        setCartProduct(
          cartProduct.map((item) =>
            item.id === id
              ? {
                  ...item,
                  price: item.price - price,
                  quantity: item.quantity - 1,
                }
              : item
          )
        );
      } else {
        return;
      }
    }
  }

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
