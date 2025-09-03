import { PiCreditCard, PiNotePencil } from "react-icons/pi";

const ProfileCards = () => {
  return (
    <section className="flex flex-col gap-3 mb-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Payment Method</h2>

        <button className="text-[var(--primary-2)]">
          + Add Card
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="p-3 bg-[var(--surface)] flex items-center justify-between gap-4 rounded-xl">
          <div className="flex gap-3 items-center">
            <PiCreditCard className="text-2xl mr-2" />
            <h2>**** **** **** 2894</h2>
          </div>

          <button className="text-[var(--text-2)] mr-2">
            <PiNotePencil className="text-2xl"/>
          </button>
        </div>
      </div>
    </section>
  )
};

export default ProfileCards;