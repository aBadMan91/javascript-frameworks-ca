import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto\;
  max-width: 1200px;
`;

export const ProductImage = styled.div`
  display: block;
  height: 600px;
  margin-bottom: 20px;

  img {
    height: 100%;
    object-fit: contain;
  }
`;
export const ProductDescription = styled.div`
  margin-bottom: 20px;
  font-size: 1.2rem;
`;
export const ProductPrice = styled.div`
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: bold;
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
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
`;
