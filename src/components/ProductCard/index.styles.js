import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: #0e2f35;
  color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 1rem;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ProductCardImage = styled(Link)`
  display: block;
  width: 100%;
  height: 300px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductCardPrice = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;

  p {
    margin: 5px 0;
  }
`;

export const OldCardPrice = styled.p`
  text-decoration: line-through;
  font-style: italic;
`;

export const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  background-color: #0e2f35;
  color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
`;
