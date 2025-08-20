import { useEffect, useState } from "react";
import { useCatalogContext } from "../contexts/CatalogContext";
import type { ProductPreview } from "../types/ProdcutTypes";
import { getFilterQuery } from "../utils/helper";

const useFetchCatalog = () => {
  const { filter, page, setPage } = useCatalogContext();
  const [products, setProducts] = useState<ProductPreview[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const serverURL = import.meta.env.VITE_SERVER_URL;

      const filterQuery = getFilterQuery(filter);

      try {
        const res = await fetch(`${serverURL}/products?page=${page}&pageSize=20&${filterQuery}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const { data, totalPages, totalCount } = await res.json();
        setProducts(data);
        setTotalPages(totalPages);
        setTotalProducts(totalCount);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, [page, filter])


  return { products, totalProducts, totalPages, page, setPage }
}

export default useFetchCatalog;