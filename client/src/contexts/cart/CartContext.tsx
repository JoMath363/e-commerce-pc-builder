import { createContext, useContext } from "react";
import type { CartItem } from "../../types/ProfileTypes";

interface CartContextInterface {
  cart: CartItem[],
  addCartItem: (item: { id?: string; name?: string; price?: number | null; imageUrl?: string }) => void,
  removeCartItem: (item: { id?: string; }) => void,
  updateCartItemQty: (item: { id?: string; quantity: number }) => void
}

export const CartContext = createContext<CartContextInterface | null>(null);

export const useCartContext = (): CartContextInterface => {
  const context = useContext(CartContext);

  if (!context) throw new Error("useProduct must be used within a ProductProvider");

  return context;
};