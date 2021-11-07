import { useContext } from "react";

import CartProductsContexts from "../../CartProductsContext";
import Product from "../Product/Product";
function CartProducts() {
  const [cartProduct, setCartProduct] = useContext(CartProductsContexts);
  return (
    <section className="products">
      {cartProduct.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          imgSrc={item.image}
          price={item.price}
        />
      ))}
    </section>
  );
}

export default CartProducts;
