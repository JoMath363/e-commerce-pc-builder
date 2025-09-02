import { useState, type Dispatch, type SetStateAction } from "react";
import { useCatalogContext } from "../../contexts/catalog/CatalogContext";
import { unslug } from "../../utils/helper";

type CategoryCheckProps = {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
};

const CategoryCheck = ({ selected, setSelected }: CategoryCheckProps) => {
  const { categories, filter } = useCatalogContext();

  const [allSelected, setAllSelected] = useState(filter.categories.length == 0)

  const toggleCheckbox = (name: string) => {
    setSelected(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  const toggleAllSelected = () => {
    if (allSelected) {
      setSelected([]);
    }

    setAllSelected(x => !x);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex gap-2">
        <button
          onClick={toggleAllSelected}
          className={`
            px-4 py-1 font-semibold border border-[var(--border-1)] rounded-lg  cursor-pointer"
            ${allSelected ? "bg-[var(--secondary-1)] border-[var(--secondary-1)] text-[var(--background)] hover:bg-[var(--secondary-2)]" : "text-[var(--text-2)] hover:bg-[var(--surface)]"}
          `}
        >
          <span>All</span>
        </button>
        <button
          onClick={toggleAllSelected}
          className={`
            px-4 py-1 font-semibold border border-[var(--border-1)] rounded-lg  cursor-pointer"
            ${!allSelected ? "bg-[var(--secondary-1)] border-[var(--secondary-1)] text-[var(--background)] hover:bg-[var(--secondary-2)]" : "text-[var(--text-2)] hover:bg-[var(--surface)]"}
          `}
        >
          <span>Selected</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {
          categories.map(({ name }, i) =>
            allSelected ? (
              <div
                key={i}
                className="px-2 py-1 flex gap-2 items-center border-1 border-[var(--border-2)] text-[var(--border-1)] rounded-md"
              >
                <span>{unslug(name)}</span>
              </div>
            ) : (
              <div
                key={i}
                onClick={() => toggleCheckbox(name)}
                className={`
                px-2 py-1 flex gap-2 items-center border-1 border-[var(--border-1)] rounded-md hover:bg-[var(--surface)] cursor-pointer
                ${selected.includes(name) && "border-[var(--secondary-1)] text-[var(--secondary-1)]"}
              `}
              >
                <span>{unslug(name)}</span>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default CategoryCheck;
