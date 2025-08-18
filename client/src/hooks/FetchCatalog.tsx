import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";
import type { ProductPreview } from "../types/ProdcutTypes";
import { getFilterQuery } from "../utils/helper";

const useFetchCatalog = () => {
  const { filter } = useProductContext();
  const [products, setProducts] = useState<ProductPreview[]>([]);
  const [page, setPage] = useState<number>(1);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const serverURL = import.meta.env.VITE_SERVER_URL;
      
      const filterQuery = getFilterQuery(filter);

      try {
        const res = await fetch(`${serverURL}/products?page=${page}&limit=20&${filterQuery}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, [page, filter])


  return { products, page, setPage }
}

export default useFetchCatalog;