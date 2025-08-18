import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { ProductFilter, Category } from "../types/ProdcutTypes";
import useFetchCategories from "../hooks/FetchCategories";

interface ProductContextInterface {
  categories: Category[];
  filter: ProductFilter;
  setFilter: Dispatch<SetStateAction<ProductFilter>>;
}

const ProductContext = createContext<ProductContextInterface | null>(null);

export const ProductProvider = (props: { children: ReactNode }) => {
  const { categories } = useFetchCategories();
  
  const [filter, setFilter] = useState<ProductFilter>({
    categories: [],
    minPrice: 0,
    maxPrice: 5000,
  });

  return (
    <ProductContext.Provider value={{
      categories,
      filter,
      setFilter,
    }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextInterface => {
  const context = useContext(ProductContext);

  if (!context) throw new Error("useProduct must be used within a ProductProvider");

  return context;
};