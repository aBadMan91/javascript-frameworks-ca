import React from "react";
import { CartStatus } from "../../components/CartStatus";
import * as styles from "./index.styles";

export function CheckoutPage() {
  return (
    <styles.CheckoutContainer>
      <h1>Checkout</h1>
      <CartStatus />
    </styles.CheckoutContainer>
  );
}
