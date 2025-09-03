import { useState } from "react";
import Modal from "./Modal";

const ChangeAddress = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <Modal isOpen={openFilter} >
        <div className="flex flex-col gap-4">
          

          <div className="flex justify-between">
            <button
              className="mt-4 py-2 px-5 bg-[var(--surface)] rounded text-[var(--text-1)] font-medium hover:bg-[var(--text-2)] hover:text-[var(--background)] active:bg-[var(--background)] active:text-[var(--text-1)] active:border-[var(--text-1)]"
              onClick={() => setOpenFilter(false)}
            >
              Close
            </button>

            <button
              className="mt-4 py-2 px-5 bg-[var(--secondary-1)] rounded text-[var(--background)] font-medium hover:bg-[var(--secondary-2)] active:bg-[var(--background)] active:text-[var(--text-1)] active:border-[var(--text-1)]"
              onClick={() => { setOpenFilter(false) }}
            >
              Filter
            </button>
          </div>
        </div>
      </Modal>

      <button
        onClick={() => setOpenFilter(true)}
        className="text-[var(--primary-2)]"
      >
        Change
      </button>
    </>
  )
};

export default ChangeAddress;