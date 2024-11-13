import React from "react";
import { CartIconContainer, CartIconSVGStyled } from "./index.styles";
import { ReactComponent as CartIconSVG } from "../../assets/cart-shopping-solid.svg";

export function CartIcon() {
  return (
    <CartIconContainer>
      <CartIconSVGStyled as={CartIconSVG} />
    </CartIconContainer>
  );
}
