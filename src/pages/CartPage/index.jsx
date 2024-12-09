import React from "react";
import { CartStatus } from "../../components/CartStatus";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import * as styles from "./index.styles";

export function CartPage() {
  const navigate = useNavigate();
  const clearCart = useCartStore((state) => state.clearCart);
  const cart = useCartStore((state) => state.cart);

  const handleCheckoutSuccess = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <styles.CartPageContainer>
      <h1>Cart</h1>
      <CartStatus />
      {cart.length > 0 && <styles.StyledButton onClick={handleCheckoutSuccess}>Checkout</styles.StyledButton>}
    </styles.CartPageContainer>
  );
}
