import { useState } from "react";
import { } from "react-icons/pi";

const ProfileSwitcher = () => {
  const [currentSwitch, setCurrentSwitch] = useState("orders");

  return (
    <section>
      <div className="flex bg-[var(--surface)] rounded-xl overflow-hidden">
        <button
          onClick={() => setCurrentSwitch("orders")}
          className={`w-1/2 py-4 font-semibold
            ${currentSwitch == "orders" && "bg-[var(--primary)] text-[var(--accent)]"}
          `}
        >
          Orders
        </button>
        <button
          onClick={() => setCurrentSwitch("builds")}
          className={`w-1/2 px-8 py-4 font-semibold text-[var(--text-2)]
            ${currentSwitch == "builds" && "bg-[var(--primary)] text-[var(--accent)]"}
          `}
        >
          Builds
        </button>
      </div>


    </section>
  )
};

export default ProfileSwitcher;