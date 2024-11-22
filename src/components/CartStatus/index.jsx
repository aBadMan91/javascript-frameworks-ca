import React from "react";
import { useCartStore } from "../../store/CartStore/useCartStore";
import { shallow } from "zustand/shallow";

export const CartStatus = () => {
  const { cart, removeFromCart, clearCart } = useCartStore(
    (state) => ({
      cart: state.cart,
      removeFromCart: state.removeFromCart,
      clearCart: state.clearCart,
    }),
    shallow
  );

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
