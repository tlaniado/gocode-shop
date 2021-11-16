import Product from "../Product/Product";
import "./Products.css";
function Products(prop) {
  return (
    <section className="products">
      {prop.productList.map((item) => (
        <Product
          key={item._id}
          id={item._id}
          imgSrc={item.image}
          price={item.price}
          title={item.title}
          category={item.category}
        />
      ))}
    </section>
  );
}
export default Products;
