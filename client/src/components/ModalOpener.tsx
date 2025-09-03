import { useState, type ReactNode } from "react";
import Modal from "./Modal";

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

      <Modal
        isOpen={isOpen}
        close={close}
        action={action}
        closeText={closeText ?? "Cancel"}
        actionText={actionText ?? "Done"}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalOpener;
