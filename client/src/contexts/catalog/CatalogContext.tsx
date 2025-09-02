import { createContext, useContext, type Dispatch, type SetStateAction } from "react";
import type { ProductFilter, Category } from "../../types/ProdcutTypes";

interface CatalogContextInterface {
  categories: Category[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>
  filter: ProductFilter;
  setFilter: Dispatch<SetStateAction<ProductFilter>>;
}

export const CatalogContext = createContext<CatalogContextInterface | null>(null);

export const useCatalogContext = (): CatalogContextInterface => {
  const context = useContext(CatalogContext);

  if (!context) throw new Error("useProduct must be used within a ProductProvider");

  return context;
};