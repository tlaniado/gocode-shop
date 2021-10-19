import React, { useContext } from "react";
import CartProductsContexts from "../../CartProductsContext";

function AddToCart({ imgSrc, name, price, id }) {
  const [cartProduct, setCartProduct] = useContext(CartProductsContexts);
  //   console.log({ imgSrc, name, price, id });
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
                  price: item.price - item.price / item.quantity,
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
    <div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}
export default AddToCart;
