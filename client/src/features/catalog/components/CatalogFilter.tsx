import { useState } from "react";
import { PiSlidersHorizontal } from "react-icons/pi";
import Modal from "../../../components/Modal";
import CategoryCheck from "./CategoryCheck";
import PriceRange from "./PriceRange";
import useFilterForm from "../hooks/FilterForm";

const CatalogFilter = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const {
    categoriesInput,
    setCategoriesInput,
    minPriceInput,
    setMinPriceInput,
    maxPriceInput,
    setMaxPriceInput,
    filterProducts
  } = useFilterForm()

  return (
    <>
      <Modal isOpen={openFilter} >
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

          <div className="flex justify-between">
            <button
              className="mt-4 py-2 px-5 bg-[var(--surface)] rounded text-[var(--text-1)] font-medium hover:bg-[var(--text-2)] hover:text-[var(--accent)] active:bg-[var(--background)] active:text-[var(--text-1)] active:border-[var(--text-1)]"
              onClick={() => setOpenFilter(false)}
            >
              Close
            </button>

            <button
              className="mt-4 py-2 px-5 bg-[var(--secondary)] rounded text-[var(--accent)] font-medium hover:bg-[var(--secondary-2)] active:bg-[var(--background)] active:text-[var(--text-1)] active:border-[var(--text-1)]"
              onClick={() => { filterProducts(); setOpenFilter(false) }}
            >
              Filter
            </button>
          </div>
        </div>
      </Modal>

      <div
        onClick={() => setOpenFilter(true)}
        className="px-2 py-2 bg-[var(--surface)] text-[var(--text-2)] text-2xl transition-all rounded-lg border border-[var(--border-2)] text-2xl transition-all hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[var(--accent)] active:bg-[var(--secondary)] active:text-[var(--accent)]"
      >
        <PiSlidersHorizontal className="text-2xl" />
      </div>
    </>
  )
};

export default CatalogFilter;