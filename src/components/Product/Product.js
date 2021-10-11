import "./Product.css";
function Product(props) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.imgSrc} alt="hello" />
      </div>
      <div className="product-info">
        <h5>{props.name}</h5>
        <h6>{props.price} $</h6>
      </div>
    </div>
  );
}

export default Product;
