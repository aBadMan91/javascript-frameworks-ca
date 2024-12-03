import styled from "styled-components";
// import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 8px;
  width: 25%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const ClearCart = styled.div`
  margin-top: 10px;
`;

export const TotalPrice = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
