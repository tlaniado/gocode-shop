import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((productDetail) => {
        console.log(productDetail);
        setProductDetails(productDetail);
      });
  }, [id]);

  return (
    <h1>
      productDetails: {id} title:{productDetails?.title}
    </h1>
  );
}

export default ProductDetails;
