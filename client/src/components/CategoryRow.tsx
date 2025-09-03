import { PiCpu, PiCircuitry, PiMemory, PiGraphicsCard, PiHardDrive, PiLightning, PiComputerTower, PiFan, PiWind } from "react-icons/pi";
import { unslug } from "../utils/helper";
import type { JSX } from "react";
import { useCatalogContext } from "../contexts/catalog/CatalogContext";
import { SelectionButton } from "./Buttons";

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
  const { categories, setFilter } = useCatalogContext();

  

  return (
    <section className="overflow-x-auto">
      <div className="flex space-x-4 w-fit">
        {
          categories.map((item, i) => {

            return (
              <SelectionButton
                key={i}
                href={`/catalog`}
                onClick={() => setFilter(prev => ({ ...prev, categories: [item.name] }))}
                className="px-3 py-2 flex gap-2 items-center text-nowrap font-medium"
                iconLeft={<span className="text-2xl">{categoryIcons[item.name]}</span>}
                text={unslug(item.name)}
              />
            )
          })
        }

      </div>
    </section>
  )
};

export default CategoryRow;