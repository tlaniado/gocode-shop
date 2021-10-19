import { useContext } from "react";

import CartProductsContexts from "../../CartProductsContext";
import CartProduct from "../CartProduct/CartProduct";
function CartProducts() {
  const [cartProduct, setCartProduct] = useContext(CartProductsContexts);
  return (
    <section>
      {cartProduct.map((item) => (
        <CartProduct
          key={item.id}
          id={item.id}
          imgSrc={item.imgSrc}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        ></CartProduct>
      ))}
    </section>
  );
}

export default CartProducts;
