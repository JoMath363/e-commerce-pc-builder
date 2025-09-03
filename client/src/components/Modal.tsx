import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

export default function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="p-4 fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl relative w-full max-w-md">
        {children}
      </div>
    </div>,
    document.body
  );
}
