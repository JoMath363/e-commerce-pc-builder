import { createContext, useContext, useState, type ReactNode } from "react";
import { cart_previews } from "../utils/mock.json";
import type { CartItem } from "../types/CartTypes";

interface CartContextInterface {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (index: number) => void;
  addOneToCartItem: (index: number) => void;
  removeOneFromCartItem: (index: number) => void;
}

const CartContext = createContext<CartContextInterface | null>(null);

export const CartProvider = (props: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(cart_previews);

  const addToCart = (product: CartItem) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const addOneToCartItem = (index: number) => {
    setCart(prev =>
      prev.map((item, i) =>
        i === index && item.quantity < 20
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const removeOneFromCartItem = (index: number) => {
    setCart(prev =>
      prev.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      addOneToCartItem,
      removeOneFromCartItem
    }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextInterface => {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used within a CartProvider");

  return context;
};
