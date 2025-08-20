import { type Dispatch, type SetStateAction } from "react";
import { useCatalogContext } from "../../contexts/CatalogContext";
import { unslug } from "../../utils/helper";

type CheckboxListProps = {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
};

const CheckboxList = ({ selected, setSelected }: CheckboxListProps) => {
  const { categories } = useCatalogContext();

  const allSelected = selected.length === categories.length;

  const toggleCheckbox = (name: string) => {
    setSelected(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  const toggleAllCheckboxes = () => {
    setSelected(allSelected ? [] : categories.map(c => c.name));
  };

  return (
    <div className="flex flex-wrap gap-2">
      <label className={"px-2 py-1 flex gap-2 items-center border-1 border-[var(--border-1)] rounded-md hover:bg-[var(--surface)] cursor-pointer"}>
        <input
          type="checkbox"
          checked={allSelected}
          onChange={toggleAllCheckboxes}
          className="h-5 w-5"
        />
        <span>All</span>
      </label>

      {categories.map(({ name }, i) => (
        <label key={i} className={"px-2 py-1 flex gap-2 items-center border-1 border-[var(--border-1)] rounded-md hover:bg-[var(--surface)] cursor-pointer"}>
          <input
            type="checkbox"
            checked={selected.includes(name)}
            onChange={() => toggleCheckbox(name)}
            className="h-5 w-5"
          />
          <span>{unslug(name)}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;
