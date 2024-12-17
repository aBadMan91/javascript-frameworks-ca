import React from "react";
import * as styles from "./index.styles";

export function CheckoutSuccessPage() {
  return (
    <styles.CheckoutSuccessContainer>
      <h1>Checkout Successful!</h1>
      <p>Thank you for your purchase. Your order has been placed successfully.</p>
      <styles.StyledLink to="/">Go back to Home</styles.StyledLink>
    </styles.CheckoutSuccessContainer>
  );
}
