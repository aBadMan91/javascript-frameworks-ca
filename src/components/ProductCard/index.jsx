import React from "react";
import * as styles from "./index.styles";

export function ProductCard({ product }) {
  const isDiscounted = product.discountedPrice && product.discountedPrice !== product.price;

  return (
    <styles.ProductCardContainer>
      <styles.ProductImage to={`/product/${product.id}`}>
        <img src={product.image.url} alt={product.image.alt} />
      </styles.ProductImage>
      <h2>{product.title}</h2>
      <styles.ProductInfo>
        <p>Price: {product.price}</p>
        {isDiscounted && <p>Discounted Price: {product.discountedPrice}</p>}
      </styles.ProductInfo>
      <styles.StyledLink to={`/product/${product.id}`}>
        <styles.StyledButton>View Product</styles.StyledButton>
      </styles.StyledLink>
    </styles.ProductCardContainer>
  );
}
