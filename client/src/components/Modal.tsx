import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { PrimaryButton, SecondaryButton } from "./Buttons";

type ModalProps = {
  close: () => void;
  action: () => void;
  closeText: string;
  actionText: string;
  isOpen: boolean;
  children: ReactNode;
}

const Modal = ({ children, close, action, isOpen, closeText, actionText }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="p-4 fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex flex-col gap-8 bg-[var(--background)] p-6 rounded-xl shadow-xl relative w-full max-w-md">
        {children}

        <div className="flex justify-between">
          <SecondaryButton
            onClick={close}
            text={closeText}
            className="py-2 px-5 font-medium"
          />

          <PrimaryButton
            onClick={() => { action(); close() }}
            text={actionText}
            className="py-2 px-5 font-medium"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal
