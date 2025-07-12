import { PiCpu, PiCircuitry, PiMemory, PiGraphicsCard, PiHardDrive, PiLightning, PiComputerTower, PiFan, PiWind } from "react-icons/pi";

const CategorieRow = () => {
  return (
    <div className="p-4  overflow-x-auto">
      <div className="flex space-x-4 w-fit">
        <button className="p-4 flex gap-2 items-center text-nowrap cursor-pointer border-2 border-[var(--border-1)] rounded-xl text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent">
          <PiCpu className="text-2xl" />
          <span className="text font-medium">
            Processors
          </span>
        </button>

        <button className="p-4 flex gap-2 items-center text-nowrap cursor-pointer border-2 border-[var(--border-1)] rounded-xl text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent">
          <PiCircuitry className="text-2xl" />
          <span className="text font-medium">
            Motherboards
          </span>
        </button>

        <button className="p-4 flex gap-2 items-center text-nowrap cursor-pointer border-2 border-[var(--border-1)] rounded-xl text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent">
          <PiMemory className="text-2xl" />
          <span className="text font-medium">
            Memory
          </span>
        </button>

        <button className="p-4 flex gap-2 items-center text-nowrap cursor-pointer border-2 border-[var(--border-1)] rounded-xl text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent">
          <PiGraphicsCard className="text-2xl" />
          <span className="text font-medium">
            Graphics Cards
          </span>
        </button>

        <button className="p-4 flex gap-2 items-center text-nowrap cursor-pointer border-2 border-[var(--border-1)] rounded-xl text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent">
          <PiHardDrive className="text-2xl" />
          <span className="text font-medium">
            Storage
          </span>
        </button>

        <button className="p-4 flex gap-2 items-center text-nowrap cursor-pointer border-2 border-[var(--border-1)] rounded-xl text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent">
          <PiLightning className="text-2xl" />
          <span className="text font-medium">
            Power Supplies
          </span>
        </button>

        <button className="p-4 flex gap-2 items-center text-nowrap cursor-pointer border-2 border-[var(--border-1)] rounded-xl text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent">
          <PiComputerTower className="text-2xl" />
          <span className="text font-medium">
            Cases
          </span>
        </button>

        <button className="p-4 flex gap-2 items-center text-nowrap cursor-pointer border-2 border-[var(--border-1)] rounded-xl text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent">
          <PiWind className="text-2xl" />
          <span className="text font-medium">
            Coolers
          </span>
        </button>

        <button className="p-4 flex gap-2 items-center text-nowrap cursor-pointer border-2 border-[var(--border-1)] rounded-xl text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent">
          <PiFan className="text-2xl" />
          <span className="text font-medium">
            Case Fans
          </span>
        </button>
      </div>
    </div>
  )
};

export default CategorieRow;