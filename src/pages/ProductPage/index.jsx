import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
// import { useCartStore } from "../../components/CartStore";
import * as styles from "./index.styles";

export function ProductPage() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useFetch(`https://v2.api.noroff.dev/online-shop/${id}`);

  const isDiscounted = product.discountedPrice && product.discountedPrice !== product.price;

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      {product.image ? <img src={product.image.url} alt={product.image.alt} /> : <div>No image available</div>}
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      {isDiscounted && <p>Discounted Price: {product.discountedPrice}</p>}
      <button>Add to Cart</button>
    </div>
  );
}
