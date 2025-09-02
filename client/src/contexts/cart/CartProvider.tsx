import type { ReactNode } from "react";
import type { User } from "../../types/ProfileTypes";
import { ProtectedCartProvider } from "./ProtectedCartProvider";
import { PublicCartProvider } from "./PublicCartProvider copy";

export const CartProvider = (props: { user?: User, children: ReactNode }) => {
  if (props.user) {
    return (
      <ProtectedCartProvider>
        {props.children}
      </ProtectedCartProvider>
    )
  }
  
  return (
    <PublicCartProvider>
      {props.children}
    </PublicCartProvider>
  )
};