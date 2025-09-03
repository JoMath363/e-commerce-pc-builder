import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { PrimaryButton, SecondaryButton } from "./Buttons";

type ModalOpenerProps = {
  children: ReactNode;
  opener: (open: () => void) => ReactNode;
  action: () => void;
  closeText?: string;
  actionText?: string;
};

const ModalOpener = ({ opener, children, action, closeText, actionText }: ModalOpenerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      {opener(open)}

      {
        isOpen && createPortal(
          <div className="p-4 fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="flex flex-col gap-8 bg-[var(--background)] p-6 rounded-xl shadow-xl relative w-full max-w-md">
              {children}

              <div className="flex justify-between">
                <SecondaryButton
                  onClick={close}
                  text={closeText ?? "Cancel"}
                  className="py-2 px-5 font-medium"
                />

                <PrimaryButton
                  onClick={() => { action(); close() }}
                  text={actionText ?? "Done"}
                  className="py-2 px-5 font-medium"
                />
              </div>
            </div>
          </div>,
          document.body
        )
      }
    </>
  );
};

export default ModalOpener;
