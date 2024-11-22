import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useCartStore } from "../../store/CartStore/useCartStore";
import * as styles from "./index.styles";

export function ProductPage() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useFetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const addToCart = useCartStore((state) => state.addToCart);

  const isDiscounted = product.discountedPrice && product.discountedPrice !== product.price;

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <styles.ProductContainer>
      <h1>{product.title}</h1>
      <styles.ProductImage> {product.image ? <img src={product.image.url} alt={product.image.alt} /> : <div>No image available</div>}</styles.ProductImage>
      <styles.ProductDescription>
        <p>{product.description}</p>
      </styles.ProductDescription>
      <styles.ProductPrice>
        {isDiscounted ? (
          <>
            <styles.OldPrice>
              <p>Price: {product.price}</p>
            </styles.OldPrice>
            <p>Discounted Price: {product.discountedPrice}</p>
          </>
        ) : (
          <p>Price: {product.price}</p>
        )}
      </styles.ProductPrice>
      <styles.StyledButton onClick={() => addToCart(product)}>Add to Cart</styles.StyledButton>
    </styles.ProductContainer>
  );
}
