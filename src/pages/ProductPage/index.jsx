import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useCartStore } from "../../store/useCartStore";
import * as styles from "./index.styles";

export function ProductPage() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useFetch(`https://v2.api.noroff.dev/online-shop/${id}`);
  const addToCart = useCartStore((state) => state.addToCart);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      document.title = product.title;
    }
  }, [product]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

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
      <styles.StyledButton onClick={() => handleAddToCart(product)}>{isAdded ? "Item was added to Cart" : "Add to Cart"}</styles.StyledButton>
      <styles.ProductReviews>
        <h2>User Reviews</h2>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <styles.Review key={review.id}>
              <p>
                <strong>{review.username}</strong>
              </p>
              <p>{review.description}</p>
              <p>Rating: {review.rating}/5</p>
            </styles.Review>
          ))
        ) : (
          <p>No reviews yet</p>
        )}
      </styles.ProductReviews>
    </styles.ProductContainer>
  );
}
