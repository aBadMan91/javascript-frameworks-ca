import React from "react";
import { useCartStore } from "../../store/useCartStore";
import { shallow } from "zustand/shallow";

const useCartStatus = () => {
  const cart = useCartStore((state) => state.cart, shallow);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  return { cart, removeFromCart, clearCart };
};

export const CartStatus = () => {
  const { cart, removeFromCart, clearCart } = useCartStatus();

  return (
    <div>
      <div>Cart items: {cart.length}</div>
      {cart.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
};
