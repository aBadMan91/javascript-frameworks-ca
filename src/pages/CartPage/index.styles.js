import styled from "styled-components";

export const CartPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    color: white;
    border-radius: 8px;
    width: 100%;
    background-color: #0e2f35;
  }
`;

export const StyledButton = styled.button`
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: darkgreen;
  }
`;
