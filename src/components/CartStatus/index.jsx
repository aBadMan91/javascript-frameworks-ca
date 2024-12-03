import React from "react";
import { useCartStore } from "../../store/useCartStore";
import { shallow } from "zustand/shallow";
import * as styles from "./index.styles";

const useCartStatus = () => {
  const cart = useCartStore((state) => state.cart, shallow);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  return { cart, removeFromCart, clearCart };
};

export const CartStatus = () => {
  const { cart, removeFromCart, clearCart } = useCartStatus();

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <styles.CartContainer>
      <div>Cart items: {cart.length}</div>
      {cart.map((product) => (
        <styles.CartItem key={product.id}>
          <span>
            {product.title} (x{product.quantity})
          </span>
          <span>{product.price}</span>
          <span>{product.discountedPrice}</span>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </styles.CartItem>
      ))}
      <styles.ClearCart>
        <button onClick={() => clearCart()}>Clear Cart</button>
      </styles.ClearCart>
      <styles.TotalPrice>Total Price: {totalPrice.toFixed(2)}</styles.TotalPrice>
    </styles.CartContainer>
  );
};
