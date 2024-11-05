import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { ProductCard } from "../../components/ProductCard";

export function HomePage() {
  const { data, loading, error } = useFetchProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const products = Array.isArray(data.data) ? data.data : [];

  return (
    <div>
      <h1>Products</h1>
      <ul>{products.length > 0 ? products.map((product) => <ProductCard key={product.id} product={product} />) : <li>No products available</li>}</ul>
    </div>
  );
}
