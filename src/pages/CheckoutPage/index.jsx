import React from "react";
import { CartStatus } from "../../components/CartStatus";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import * as styles from "./index.styles";

export function CheckoutPage() {
  const navigate = useNavigate();
  const clearCart = useCartStore((state) => state.clearCart);

  const handleCheckoutSuccess = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <styles.CheckoutContainer>
      <h1>Checkout</h1>
      <CartStatus />
      <button onClick={handleCheckoutSuccess}>Proceed to Checkout Success</button>
    </styles.CheckoutContainer>
  );
}
