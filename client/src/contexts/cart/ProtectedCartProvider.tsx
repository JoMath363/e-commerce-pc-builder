import { useEffect, useState, type ReactNode } from "react";
import type { CartItem } from "../../types/ProfileTypes";
import { CartContext } from "./CartContext";

export const ProtectedCartProvider = (props: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const serverURL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const fetchCart = async () => {

      const res = await fetch(`${serverURL}/carts`, {
        credentials: "include"
      });

      if (!res.ok) throw new Error("Failed to fetch cart.")
      const { data } = await res.json();
      setCart(data)
    }

    fetchCart();
  }, [serverURL])

  const addCartItem = async ({ id }: { id?: string }) => {
    if (!id) return;

    try {
      const res = await fetch(`${serverURL}/carts/${id}`, {
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

  const removeCartItem = async ({ id }: { id?: string | undefined }) => {
    if (!id) return;

    try {
      const res = await fetch(`${serverURL}/carts/${id}`, {
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

  const updateCartItemQty = async ({ id, quantity }: { id?: string, quantity: number }) => {
    if (!id) return;

    try {
      const res = await fetch(`${serverURL}/carts/${id}`, {
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
      addCartItem,
      removeCartItem,
      updateCartItemQty
    }}>
      {props.children}
    </CartContext.Provider>
  );
};