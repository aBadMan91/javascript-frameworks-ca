import styled from "styled-components";
// import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    padding: 10px;
    background-color: #0e2f35;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
