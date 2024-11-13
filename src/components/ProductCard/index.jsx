import React from "react";
import * as styles from "./index.styles";

export function ProductCard({ product }) {
  const isDiscounted = product.discountedPrice && product.discountedPrice !== product.price;

  return (
    <styles.ProductCardContainer>
      <h2>{product.title}</h2>
      <styles.StyledLink to={`/product/${product.id}`}>
        <img src={product.image.url} alt={product.image.alt} />
      </styles.StyledLink>
      <p>{product.description}</p>
      <p>{product.price}</p>
      {isDiscounted && <p>Discounted Price:{product.discountedPrice}</p>}
      <styles.StyledLink to={`/product/${product.id}`}>
        <p>View Product</p>
      </styles.StyledLink>
    </styles.ProductCardContainer>
  );
}
