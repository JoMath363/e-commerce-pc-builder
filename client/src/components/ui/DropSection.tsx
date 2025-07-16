import { useState, type JSX } from "react";
import { PiCaretRightBold, PiMinusBold } from "react-icons/pi";

const DropSection = (props: { title: string; children: JSX.Element }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="m-4 border-1 border-[var(--border-2)] rounded-lg overflow-hidden">
      <div
        className={
          `px-4 py-2 flex justify-between items-center cursor-pointer select-none
          ${isOpen? "bg-[var(--secondary-1)] text-[var(--background)]" : "bg-[var(--surface)]"}`
        }
        onClick={() => setIsOpen(x => !x)}
      >
        <h2 className="font-bold text-lg" >{props.title}</h2>

        <button className=" text-xl">
          {
            isOpen ? (
              <PiMinusBold />
            ) : (
              <PiCaretRightBold className="rotate-90" />
            )
          }
        </button>
      </div>

      {isOpen ? props.children : null}
    </section>
  )
};

export default DropSection;