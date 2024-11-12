import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import * as styles from "./index.styles";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { data: products } = useFetch("https://v2.api.noroff.dev/online-shop/");

  useEffect(() => {
    if (products) {
      const results = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
      setSearchResults(results);
    }
  }, [searchQuery, products]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <styles.SearchContainer>
      <styles.SearchInput type="text" placeholder="Search for products..." value={searchQuery} onChange={handleSearch} />
      {searchQuery && (
        <styles.SearchResults>
          {searchResults.map((product) => (
            <styles.SearchResultItem key={product.id}>{product.title}</styles.SearchResultItem>
          ))}
        </styles.SearchResults>
      )}
    </styles.SearchContainer>
  );
}
