import { useState, useEffect } from "react";
import { useCatalogContext } from "../contexts/CatalogContext";

const useFilter = () => {
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