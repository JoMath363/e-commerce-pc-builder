import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { CartItem } from "../types/CartTypes";
import useCheckAuth from "../hooks/CheckAuth";

interface CartContextInterface {
  cart: CartItem[],
  addToCart: (id: string) => void,
  removeFromCart: (id: string) => void,
  updateCartItemQty: (id: string, quantity: number) => void
}

const CartContext = createContext<CartContextInterface | null>(null);

export const CartProvider = (props: { children: ReactNode }) => {
  const isLogged = useCheckAuth();
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      if (!isLogged) return;

      const serverURL = import.meta.env.VITE_SERVER_URL;

      try {
        const res = await fetch(`${serverURL}/profile/cart`, {
          credentials: "include"
        });
        if (!res.ok) throw new Error("Failed to fetch cart.")
        const { data } = await res.json();
        setCart(data)
      } catch (err) {
        console.error(err);
      }
    }

    fetchCart();
  }, [isLogged])

  const addToCart = async (id: string) => {
    if (!isLogged) return;

    const serverURL = import.meta.env.VITE_SERVER_URL;

    try {
      const res = await fetch(`${serverURL}/profile/cart/${id}`, {
        method: 'POST',
        credentials: "include"
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const { data } = await res.json();
      setCart(data);
    } catch (err) {
      console.error(err);
    }
  }

  const removeFromCart = async (id: string) => {
    if (!isLogged) return;

    const serverURL = import.meta.env.VITE_SERVER_URL;

    try {
      const res = await fetch(`${serverURL}/profile/cart/${id}`, {
        method: 'DELETE',
        credentials: "include"
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const { data } = await res.json();
      setCart(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateCartItemQty = async (id: string, quantity: number) => {
    if (!isLogged) return;

    const serverURL = import.meta.env.VITE_SERVER_URL;

    try {
      const res = await fetch(`${serverURL}/profile/cart/${id}`, {
        method: 'PATCH',
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: quantity })
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const { data } = await res.json();
      setCart(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateCartItemQty
    }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): CartContextInterface => {
  const context = useContext(CartContext);

  if (!context) throw new Error("useProduct must be used within a ProductProvider");

  return context;
};