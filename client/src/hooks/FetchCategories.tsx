import { useEffect, useState } from "react";
import type { Category } from "../types/ProdcutTypes";

const useFetchCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

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

  return { categories }
}

export default useFetchCategories;