import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((productDetail) => {
        setProductDetails(productDetail);
      });
  }, [id]);

  return <h1>productDetailss {id}</h1>;
}

export default ProductDetails;
