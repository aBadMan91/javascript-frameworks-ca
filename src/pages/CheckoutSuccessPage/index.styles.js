import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0e2f35;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  &:hover {
    background-color: #0c2a2f;
  }
`;
