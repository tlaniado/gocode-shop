import Product from "../Product/Product";
import "./Products.css";
function Products(prop) {
  return (
    <section className="products">
      {prop.productList.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          imgSrc={item.image}
          price={item.price}
          title={item.title}
        />
      ))}
    </section>
  );
}
export default Products;
