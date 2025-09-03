import { useState } from "react";
import { useCatalogContext } from "../../../contexts/catalog/CatalogContext";

const useFilter = () => {
  const { setPage, filter, setFilter } = useCatalogContext();
  const [categoriesInput, setCategoriesInput] = useState(filter.categories);
  const [minPriceInput, setMinPriceInput] = useState(filter.minPrice);
  const [maxPriceInput, setMaxPriceInput] = useState(filter.maxPrice);

  const filterProducts = () => {
    setFilter({
      categories: categoriesInput,
      minPrice: minPriceInput,
      maxPrice: maxPriceInput
    });
    setPage(1);
  }

  return {
    categoriesInput,
    setCategoriesInput,
    minPriceInput,
    setMinPriceInput,
    maxPriceInput,
    setMaxPriceInput,
    filterProducts
  }
};

export default useFilter;