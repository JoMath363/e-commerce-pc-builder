import { createContext, useContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { ProductFilter, Category } from "../types/ProdcutTypes";

interface ProductContextInterface {
  categories: Category[];
  filter: ProductFilter;
  setFilter: Dispatch<SetStateAction<ProductFilter>>;
}

const ProductContext = createContext<ProductContextInterface | null>(null);

export const ProductProvider = (props: { children: ReactNode }) => {

  const [categories, setCategories] = useState<Category[]>([]);
  const [filter, setFilter] = useState<ProductFilter>({
    categories: [],
    minPrice: 0,
    maxPrice: 5000,
  });

  useEffect(() => {
    const serverURL = import.meta.env.VITE_SERVER_URL

    const fetchCategories = async () => {
      try {
        const res = await fetch(`${serverURL}/categories`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCategories();
  }, [])

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

export const useProduct = (): ProductContextInterface => {
  const context = useContext(ProductContext);

  if (!context) throw new Error("useProduct must be used within a ProductProvider");

  return context;
};
