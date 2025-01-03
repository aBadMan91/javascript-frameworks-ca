import React from "react";
import * as styles from "./index.styles";
import { StarRating } from "../StarRating/";

export function ProductCard({ product }) {
  const isDiscounted = product.discountedPrice && product.discountedPrice !== product.price;

  return (
    <styles.ProductCardContainer to={`/product/${product.id}`}>
      <styles.ProductCardImage>
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
    </styles.ProductCardContainer>
  );
}
