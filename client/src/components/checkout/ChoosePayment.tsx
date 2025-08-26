import { PiCreditCard } from "react-icons/pi";

const ChoosePayment = () => {

  return (
    <section className="flex flex-col gap-3 mb-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Payment Method</h2>

        <button className="text-[var(--primary-2)]">
          + Add Card
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="p-2 bg-[var(--surface)] flex items-center gap-4 rounded-xl border-[var(--border-1)] border">
          <input type="radio" checked className="mx-2 w-5 h-5"/>
          <div className="w-full flex items-center justify-between">
            <h2>**** **** **** 2894</h2>
            <PiCreditCard className="text-2xl mr-2"/>
          </div>
        </label>
      </div>
    </section>
  )
};

export default ChoosePayment;