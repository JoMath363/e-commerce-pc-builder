import { PiMapPin } from "react-icons/pi";
import { address } from "../../../utils/mock.json"

const ChooseAddress = () => {

  return (
    <section className="flex flex-col gap-3 mb-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Delivery Location</h2>

        <button className="text-[var(--primary)]">
          Change
        </button>
      </div>

      <div className="px-2 py-1.5 bg-[var(--surface)] flex items-center gap-4 rounded-xl border-[var(--border-1)] border">
        <span className="bg-[var(--primary)] p-2 rounded-lg">
          <PiMapPin className="text-2xl text-[var(--accent)]" />
        </span>
        <div>
          <h2>{address.street}, {address.number}, {address.complement} - {address.neighborhood}</h2>
          <h2>{address.city} - {address.state}, {address.postalCode}, {address.country}</h2>
        </div>
      </div>
    </section>
  )
};

export default ChooseAddress;