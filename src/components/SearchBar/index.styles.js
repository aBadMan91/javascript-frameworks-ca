import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    max-height: 200px;
  }
`;

export const SearchResultItem = styled.div`
  padding: 10px;
  margin: 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;
