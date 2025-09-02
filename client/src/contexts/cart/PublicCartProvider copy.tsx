import { useState, type ReactNode } from "react";
import type { CartItem } from "../../types/ProfileTypes";
import { CartContext } from "./CartContext";

export const PublicCartProvider = (props: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addCartItem = async ({ id }: { id?: string }) => {
    console.log(id);
    setCart([])
  }

  const removeCartItem = async ({ id }: { id?: string }) => {
    console.log(id);
    setCart([])
  };

  const updateCartItemQty = async ({ id, quantity }: { id?: string; quantity: number; }) => {
    console.log(id, quantity);
    setCart([])
  };

  return (
    <CartContext.Provider value={{
      cart,
      addCartItem,
      removeCartItem,
      updateCartItemQty
    }}>
      {props.children}
    </CartContext.Provider>
  );
};