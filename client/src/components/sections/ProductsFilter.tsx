import { } from "react-icons/pi";
import DropSection from "../ui/DropSection";
import { useProduct } from "../../contexts/ProdcutContext";
import { useState } from "react";
import CheckboxList from "../ui/CheckboxList";
import PriceRange from "../ui/PriceRange";

const ProductsFilter = () => {
  const { filter, setFilter } = useProduct();
  const [categories, setCategories] = useState(filter.categories);
  const [minPrice, setMinPrice] = useState(filter.minPrice);
  const [maxPrice, setMaxPrice] = useState(filter.maxPrice);

  const filterProducts = () => {
    setFilter({
      categories,
      minPrice,
      maxPrice
    });
  }

  return (
    <DropSection title="Filter">
      <div className="p-4 flex flex-col gap-4">

        <div className="flex flex-col gap-2 select-none">
          <h3 className="font-medium">Categories</h3>
          <CheckboxList selected={categories} setSelected={setCategories} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Price</h3>
          <PriceRange {...{ minPrice, maxPrice, setMinPrice, setMaxPrice }} />
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

export default ProductsFilter;