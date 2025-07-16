import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { ProductPreview, ProductFilter } from "../utils/types";

import { components } from "../utils/mock.json";

interface ProductContextInterface {
  filter: ProductFilter;
  setFilter: Dispatch<SetStateAction<ProductFilter>>;
  fetchProducts: () => ProductPreview[];
}

const ProductContext = createContext<ProductContextInterface | null>(null);

export const ProductProvider = (props: { children: ReactNode }) => {
  const defaultFilter: ProductFilter = {
    categories: [],
    maxPrice: 2000,
    minPrice: 0,
  };

  const [filter, setFilter] = useState<ProductFilter>(defaultFilter);

  const fetchProducts = () => {
    return components;
  };

  const value: ProductContextInterface = {
    filter,
    setFilter,
    fetchProducts
  }

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextInterface => {
  const context = useContext(ProductContext);

  if (!context) throw new Error("useProduct must be used within a ProductProvider");

  return context;
};
