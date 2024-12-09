import styled from "styled-components";

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h1 {
    max-width: 1200px;
    text-align: center;
    color: white;
    margin-bottom: 20px;
    border-radius: 8px;
  }
`;

export const StyledButton = styled.button`
  background-color: green;
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: darkgreen;
  }
`;
