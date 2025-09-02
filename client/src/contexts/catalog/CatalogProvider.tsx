import { useEffect, useState, type ReactNode } from "react";
import type { Category, ProductFilter } from "../../types/ProdcutTypes";
import { CatalogContext } from "./CatalogContext";

export const CatalogProvider = (props: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const serverURL = import.meta.env.VITE_SERVER_URL

    const fetchCategories = async () => {
      try {
        const res = await fetch(`${serverURL}/categories`);
        if (!res.ok) throw new Error("Failed to fetch");
        const { data } = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCategories();
  }, [])

  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState("");
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
      search,
      setSearch,
      filter,
      setFilter
    }}>
      {props.children}
    </CatalogContext.Provider>
  );
};