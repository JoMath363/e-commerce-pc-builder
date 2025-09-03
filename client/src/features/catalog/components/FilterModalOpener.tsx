import { PiSlidersHorizontal } from "react-icons/pi";
import CategoryCheck from "./CategoryCheck";
import PriceRange from "./PriceRange";
import useFilterForm from "../hooks/FilterForm";
import ModalOpener from "../../../components/ModalOpener";

const FilterModalOpener = () => {
  const {
    categoriesInput,
    setCategoriesInput,
    minPriceInput,
    setMinPriceInput,
    maxPriceInput,
    setMaxPriceInput,
    filterProducts,
  } = useFilterForm();

  return (
    <ModalOpener
      action={filterProducts}
      actionText="Filter"
      opener={(open: () => void) => (
        <button
          className="px-2 py-2 bg-[var(--surface)] text-[var(--text-2)] text-2xl transition-all rounded-lg border border-[var(--border-2)] text-2xl transition-all hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[var(--accent)] active:bg-[var(--secondary)] active:text-[var(--accent)]"
          onClick={open}
        >
          <PiSlidersHorizontal />
        </button>
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 select-none">
          <h3 className="font-medium">Categories</h3>
          <CategoryCheck
            selected={categoriesInput}
            setSelected={setCategoriesInput}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Price</h3>
          <PriceRange
            minPrice={minPriceInput}
            maxPrice={maxPriceInput}
            setMinPrice={setMinPriceInput}
            setMaxPrice={setMaxPriceInput}
          />
        </div>
      </div>
    </ModalOpener>
  );
};

export default FilterModalOpener;
