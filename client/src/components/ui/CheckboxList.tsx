import { type Dispatch, type SetStateAction } from "react";
import { useProduct } from "../../contexts/ProductContext";
import { unslug } from "../../utils/helper";

type CheckboxListProps = {
  selected: number[];
  setSelected: Dispatch<SetStateAction<number[]>>;
}

const CheckboxList = ({ selected, setSelected }: CheckboxListProps) => {
  const { categoriesList } = useProduct();

  const toggleCheckbox = (n: number) => {
    setSelected(prev =>
      prev.includes(n) ? prev.filter(item => item !== n) : [...prev, n]
    );
  };

  const toggleAllCheckboxes = () => {
    if (selected.length == categoriesList.length) {
      setSelected([])
    } else {
      setSelected(Array.from({ length: categoriesList.length }, (_, i) => i))
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <div
        className="px-2 py-1 flex gap-2 items-center border-1 border-[var(--border-1)] rounded-md hover:bg-[var(--surface)]"
        onClick={toggleAllCheckboxes}
      >
        <input
          type="checkbox"
          checked={selected.length == categoriesList.length}
          readOnly
          className="h-5 w-5"
        />
        <span>All</span>
      </div>
      {
        categoriesList.map((item, i) => (
          <div
            key={i}
            onClick={() => toggleCheckbox(i)}
            className="px-2 py-1 flex gap-2 items-center border-1 border-[var(--border-1)] rounded-md hover:bg-[var(--surface)]"
          >
            <input
              type="checkbox"
              checked={selected.includes(i)}
              readOnly
              className="h-5 w-5"
            />
            <span>{unslug(item.name)}</span>
          </div>
        ))
      }
    </div>
  )
};

export default CheckboxList;