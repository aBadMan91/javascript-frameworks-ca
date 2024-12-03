import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ProductImage = styled.div`
  display: block;
  height: 600px;
  margin-bottom: 20px;

  img {
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const ProductDescription = styled.div`
  margin-bottom: 20px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProductPrice = styled.div`
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const OldPrice = styled.p`
  text-decoration: line-through;
  font-style: italic;
`;

export const StyledLink = styled(Link)`
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  background-color: #0e2f35;
  width: 25%;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductReviews = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Review = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
`;
