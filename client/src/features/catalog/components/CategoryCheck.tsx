import { useState, type Dispatch, type SetStateAction } from "react";
import { useCatalogContext } from "../../../contexts/catalog/CatalogContext";
import { unslug } from "../../../utils/helper";
import clsx from "clsx";

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
          className={clsx(
            "px-4 py-1 font-semibold border border-[var(--border-1)] rounded-lg",
            allSelected && "bg-[var(--primary)] border-[var(--primary)] text-[var(--accent)]",
            !allSelected && "text-[var(--text-2)] hover:bg-[var(--surface)]"
          )}
        >
          All
        </button>

        <button
          onClick={toggleAllSelected}
          className={clsx(
            "px-4 py-1 font-semibold border border-[var(--border-1)] rounded-lg",
            !allSelected && "bg-[var(--primary)] border-[var(--primary)] text-[var(--accent)]",
            allSelected && "text-[var(--text-2)] hover:bg-[var(--surface)]"
          )}
        >
          Select
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {
          categories.map(({ name }, i) =>
            <button
              key={i}
              disabled={allSelected}
              onClick={() => toggleCheckbox(name)}
              className={clsx(
                "px-2 py-1 flex gap-2 items-center border border-[var(--border-1)] rounded-md",
                selected.includes(name) && "border-[var(--primary)] text-[var(--text-1)] hover:bg-[var(--surface)]",
                allSelected && "border-[var(--border-2)] text-[var(--border-1)] rounded-md"
              )}
            >
              {unslug(name)}
            </button>
          )
        }
      </div>
    </div>
  );
};

export default CategoryCheck;
