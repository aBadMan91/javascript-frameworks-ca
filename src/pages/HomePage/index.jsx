import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../../components/ProductCard";

export function HomePage() {
  const { data, isLoading, isError } = useFetch("https://v2.api.noroff.dev/online-shop");

  console.log(data);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>{data.length > 0 ? data.map((product) => <ProductCard key={product.id} product={product} />) : <li>No products available</li>}</ul>
    </div>
  );
}
