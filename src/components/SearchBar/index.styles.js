import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
`;

export const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SearchResultItem = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid #000;
  cursor: pointer;
`;
