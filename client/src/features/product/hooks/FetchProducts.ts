import { useEffect, useState } from "react";
import type { ProductFilter, ProductPreview } from "../../../types/ProdcutTypes";
import { getFilterQuery } from "../../../utils/helper";

const useFetchProducts = ({ filter }: { filter: ProductFilter}) => {
  const [products, setProducts] = useState<ProductPreview[]>([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const serverURL = import.meta.env.VITE_SERVER_URL;
      
      const filterQuery = getFilterQuery("", filter);

      try {
        const res = await fetch(`${serverURL}/products?${filterQuery}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setProducts(json.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, [filter])

  return { products }
}

export default useFetchProducts;