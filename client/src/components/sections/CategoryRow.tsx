import { PiCpu, PiCircuitry, PiMemory, PiGraphicsCard, PiHardDrive, PiLightning, PiComputerTower, PiFan, PiWind } from "react-icons/pi";
import { categories } from "../../utils/mock.json"
import { unslug } from "../../utils/helper";
import type { JSX } from "react";

const categoryIcons: { [key: string]: JSX.Element } = {
  "processors": <PiCpu />,
  "motherboards": <PiCircuitry />,
  "memory": <PiMemory />,
  "graphics-cards": <PiGraphicsCard />,
  "storage": <PiHardDrive />,
  "power-supplies": <PiLightning />,
  "cases": <PiComputerTower />,
  "coolers": <PiFan />,
  "case-fans": <PiWind />
};

const CategoryRow = () => {
  return (
    <section className="overflow-x-auto">
      <div className="flex space-x-4 w-fit">
        {
          categories.map(item =>
            <button className="p-3 flex gap-2 items-center text-nowrap text-2xl cursor-pointer border-1 border-[var(--border-2)] rounded-xl text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent">
              {categoryIcons[item.name] || null}
              <span className="text-base font-medium">
                {unslug(item.name)}
              </span>
            </button>)
        }

      </div>
    </section>
  )
};

export default CategoryRow;