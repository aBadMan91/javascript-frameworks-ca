import styled from "styled-components";

export const CartIconContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }

  @media (max-width: 480px) {
    margin-left: 5px;
  }
`;

export const CartIconSVGStyled = styled.svg`
  fill: white;
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;
