import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((product) => product.id !== productId) })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);
