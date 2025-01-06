import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../../components/ProductCard";
import * as styles from "./index.styles";

export function HomePage() {
  const { data, isLoading, isError } = useFetch("https://v2.api.noroff.dev/online-shop");

  useEffect(() => {
    document.title = "Home";
  }, []);

  console.log(data);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <styles.PageContainer>
      <h1>Products</h1>
      <styles.ProductGrid>{data.length > 0 ? data.map((product) => <ProductCard key={product.id} product={product} />) : <li>No products available</li>}</styles.ProductGrid>
    </styles.PageContainer>
  );
}
