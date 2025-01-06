import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import * as styles from "./index.styles";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { data: products } = useFetch("https://v2.api.noroff.dev/online-shop/");
  const navigate = useNavigate();

  useEffect(() => {
    if (products) {
      const results = products.filter((product) => product.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
      setSearchResults(results);
    }
  }, [searchQuery, products]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleProductClick = (productId) => {
    setSearchQuery("");
    navigate(`/product/${productId}`);
  };

  return (
    <styles.SearchContainer>
      <styles.SearchInput type="text" placeholder="Search for products..." value={searchQuery} onChange={handleSearch} />
      {searchQuery && (
        <styles.SearchResults>
          {searchResults.map((product) => (
            <styles.SearchResultItem key={product.id} onClick={() => handleProductClick(product.id)}>
              {product.title}
            </styles.SearchResultItem>
          ))}
        </styles.SearchResults>
      )}
    </styles.SearchContainer>
  );
}
