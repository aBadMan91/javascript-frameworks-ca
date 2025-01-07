import styled from "styled-components";
// import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 8px;
  width: 50%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #0e2f35;
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ClearCartButton = styled.button`
  margin-top: 10px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

export const RemoveButton = styled.button`
  cursor: pointer;
`;

export const TotalPrice = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    margin-right: 0;
  }
`;

export const Price = styled.span`
  text-align: right;
  width: 100px;
  padding-right: 10px;

  @media (max-width: 768px) {
    width: auto;
    padding-right: 0;
    text-align: center;
  }
`;
