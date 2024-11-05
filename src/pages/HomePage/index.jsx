import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../../components/ProductCard";

export function HomePage() {
  const { data, isLoading, isError } = useFetch("https://v2.api.noroff.dev/online-shop");

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const products = Array.isArray(data.data) ? data.data : [];
  console.log(products);

  return (
    <div>
      <h1>Products</h1>
      <ul>{products.length > 0 ? products.map((product) => <ProductCard key={product.id} product={product} />) : <li>No products available</li>}</ul>
    </div>
  );
}
