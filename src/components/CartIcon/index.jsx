import React from "react";
import { CartIconContainer, CartIconSVGStyled } from "./index.styles";
import { ReactComponent as CartIconSVG } from "../../assets/cart-shopping-solid.svg";
import { useCartStore } from "../../store/useCartStore";

export function CartIcon() {
  const cart = useCartStore((state) => state.cart);

  return (
    <CartIconContainer>
      <CartIconSVGStyled as={CartIconSVG} />
      <span>{cart.length}</span>
    </CartIconContainer>
  );
}
