import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { ProductPreview, ProductFilter, ProductData } from "../types/prodcutTypes";

import { prodcuts_previews, products_data, categories } from "../utils/mock.json";

interface ProductContextInterface {
  categoriesList: { name: string; }[];
  filter: ProductFilter;
  setFilter: Dispatch<SetStateAction<ProductFilter>>;
  fetchCatalog: (page: number) => ProductPreview[];
  fetchFeatured: (filter: ProductFilter) => ProductPreview[];
  fetchProduct: (name: string) => ProductData[];
}

const ProductContext = createContext<ProductContextInterface | null>(null);

export const ProductProvider = (props: { children: ReactNode }) => {
  const categoriesList = categories;

  const [filter, setFilter] = useState<ProductFilter>({
    categories: [],
    minPrice: 0,
    maxPrice: 2000,
  });

  const fetchFeatured = (filter: ProductFilter): ProductPreview[] => {
    console.log(filter);
    return prodcuts_previews;
  }

  const fetchCatalog = (page: number): ProductPreview[] => {
    console.log(page);
    return prodcuts_previews;
  };

  const fetchProduct = (name: string): ProductData[] => {
    return products_data.filter(product => product.name == name);
  }

  return (
    <ProductContext.Provider value={{
      categoriesList,
      filter,
      setFilter,
      fetchCatalog,
      fetchFeatured,
      fetchProduct
    }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextInterface => {
  const context = useContext(ProductContext);

  if (!context) throw new Error("useProduct must be used within a ProductProvider");

  return context;
};
