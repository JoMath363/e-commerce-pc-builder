import { } from "react-icons/pi";
import { useProduct } from "../../contexts/ProductContext";
import ProductCard from "../ui/ProductCard";
import Pagination from "../ui/Pagination";
import { useEffect, useState } from "react";
import type { ProductPreview } from "../../types/ProdcutTypes";
import { getFilterQuery } from "../../utils/helper";

const CatalogGrid = () => {
  const { filter } = useProduct();
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

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ">Catalog</h2>
        <p className="text-[var(--text-2)]">120 results</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((item, i) => <ProductCard {...item} key={i} />)}
      </div>

      <Pagination page={page} setPage={setPage} maximum={10} />
    </section>
  )
};

export default CatalogGrid;