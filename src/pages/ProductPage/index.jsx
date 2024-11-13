import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export function ProductPage() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useFetch(`https://v2.api.noroff.dev/online-shop/${id}`);

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
      <p>Discounted Price: {product.discountedPrice}</p>
    </div>
  );
}
