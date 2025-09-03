import { useEffect, useState } from "react";
import type { ProductData } from "../../../types/ProdcutTypes";

const useFetchProduct = (id: string) => {
  const [product, setProduct] = useState<ProductData | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const serverURL = import.meta.env.VITE_SERVER_URL;

      try {
        const res = await fetch(`${serverURL}/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const { data } = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProduct();
  }, [id])

  return { product }
}

export default useFetchProduct;