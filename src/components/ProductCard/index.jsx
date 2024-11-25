import React from "react";
import * as styles from "./index.styles";

export function ProductCard({ product }) {
  const isDiscounted = product.discountedPrice && product.discountedPrice !== product.price;

  return (
    <styles.ProductCardContainer>
      <styles.ProductCardImage to={`/product/${product.id}`}>
        <img src={product.image.url} alt={product.image.alt} />
      </styles.ProductCardImage>
      <h2>{product.title}</h2>
      <styles.ProductCardPrice>
        {isDiscounted ? (
          <>
            <styles.OldCardPrice>Price: {product.price}</styles.OldCardPrice>
            <span>Discounted Price: {product.discountedPrice}</span>
          </>
        ) : (
          <span>Price: {product.price}</span>
        )}
      </styles.ProductCardPrice>
      <styles.StyledLink to={`/product/${product.id}`}>
        <styles.StyledButton>View Product</styles.StyledButton>
      </styles.StyledLink>
    </styles.ProductCardContainer>
  );
}
