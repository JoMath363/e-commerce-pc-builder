import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { ProductFilter, Category } from "../types/ProdcutTypes";
import useFetchCategories from "../hooks/FetchCategories";

interface CatalogContextInterface {
  categories: Category[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  filter: ProductFilter;
  setFilter: Dispatch<SetStateAction<ProductFilter>>;
}

const CatalogContext = createContext<CatalogContextInterface | null>(null);

export const CatalogProvider = (props: { children: ReactNode }) => {
  const { categories } = useFetchCategories();

  const [page, setPage] = useState<number>(1);
  
  const [filter, setFilter] = useState<ProductFilter>({
    categories: [],
    minPrice: 0,
    maxPrice: 5000,
  });

  return (
    <CatalogContext.Provider value={{
      categories,
      page, 
      setPage,
      filter,
      setFilter,
    }}>
      {props.children}
    </CatalogContext.Provider>
  );
};

export const useCatalogContext = (): CatalogContextInterface => {
  const context = useContext(CatalogContext);

  if (!context) throw new Error("useProduct must be used within a ProductProvider");

  return context;
};