import React from "react";
import { CartIconContainer, CartIconSVGStyled } from "./index.styles";
import { ReactComponent as CartIconSVG } from "../../assets/cart-shopping-solid.svg";
import { useCartStore } from "../../store/useCartStore";

export function CartIcon() {
  const totalCartQuantity = useCartStore((state) => state.cart.reduce((total, item) => total + item.quantity, 0));

  return (
    <CartIconContainer>
      <CartIconSVGStyled as={CartIconSVG} />
      <span>{totalCartQuantity}</span>
      {/* {totalCartQuantity > 0 && <span>{totalCartQuantity}</span>} */}
    </CartIconContainer>
  );
}
