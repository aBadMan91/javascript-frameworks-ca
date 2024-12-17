import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  color: black;
  border: 1px solid #ddd;
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
`;

export const SearchResultItem = styled.div`
  padding: 10px;
  margin: 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
