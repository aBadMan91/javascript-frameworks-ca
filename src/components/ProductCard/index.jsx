import React from "react";

export function ProductCard({ product }) {
  return (
    <li>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.discountedPrice}</p>
      <img src={product.image.url} alt={product.image.alt} />
    </li>
  );
}
