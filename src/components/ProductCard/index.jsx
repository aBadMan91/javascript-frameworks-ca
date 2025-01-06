import React from "react";
import * as styles from "./index.styles";

export function ProductCard({ product }) {
  const isDiscounted = product.discountedPrice && product.discountedPrice !== product.price;

  return (
    <styles.ProductCardContainer to={`/product/${product.id}`}>
      <styles.ProductCardImage>
        <img src={product.image.url} alt={product.image.alt} />
      </styles.ProductCardImage>
      <h2>{product.title}</h2>
      <p>User Rating: {product.rating ? `${product.rating}/5` : "No ratings yet"}</p>
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
    </styles.ProductCardContainer>
  );
}
