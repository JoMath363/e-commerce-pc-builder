import { } from "react-icons/pi";
import DropSection from "../ui/DropSection";
import { useCatalogContext } from "../../contexts/CatalogContext";
import { useEffect, useState } from "react";
import CheckboxList from "../ui/CheckboxList";
import PriceRange from "../ui/PriceRange";

const CatalogFilter = () => {
  const { categories, setPage, filter, setFilter } = useCatalogContext();
  const [categoriesInput, setCategoriesInput] = useState(filter.categories);
  const [minPriceInput, setMinPriceInput] = useState(filter.minPrice);
  const [maxPriceInput, setMaxPriceInput] = useState(filter.maxPrice);

  useEffect(() => {
    if (categories.length > 0 && categoriesInput.length == 0) {
      setCategoriesInput(categories.map(c => c.name));
    }
  }, [categories, categoriesInput]);

  const filterProducts = () => {
    setFilter({
      categories: categoriesInput,
      minPrice: minPriceInput,
      maxPrice: maxPriceInput
    });
    setPage(1);
  }

  return (
    <DropSection title="Filter">
      <div className="p-4 flex flex-col gap-4">

        <div className="flex flex-col gap-2 select-none">
          <h3 className="font-medium">Categories</h3>
          <CheckboxList
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

        <button
          className="mt-4 p-2 bg-[var(--secondary-1)] rounded text-[var(--background)] font-medium hover:bg-[var(--secondary-2)] active:bg-[var(--background)] active:text-[var(--text-1)] border-1 active:border-[var(--text-1)]"
          onClick={filterProducts}
        >
          Filter Products
        </button>
      </div>
    </DropSection>
  )
};

export default CatalogFilter;