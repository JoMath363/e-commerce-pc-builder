import { PiCpu, PiCircuitry, PiMemory, PiGraphicsCard, PiHardDrive, PiLightning, PiComputerTower, PiFan, PiWind } from "react-icons/pi";
import { unslug } from "../../utils/helper";
import type { JSX } from "react";
import { useProduct } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";

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
  const { categories, setFilter } = useProduct();

  return (
    <section className="overflow-x-auto">
      <div className="flex space-x-4 w-fit">
        {
          categories.map((item, i) =>
            <Link
              key={i}
              to={`/catalog`}
              onClick={() => setFilter(prev => ({...prev, categories: [item.name]}))}
              className="p-3 flex gap-2 items-center text-nowrap text-2xl cursor-pointer border-1 border-[var(--border-2)] rounded-xl text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent"
            >
              {categoryIcons[item.name] || null}
              <span className="text-base font-medium">
                {unslug(item.name)}
              </span>
            </Link>)
        }

      </div>
    </section>
  )
};

export default CategoryRow;