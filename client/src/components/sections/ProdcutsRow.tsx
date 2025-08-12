import { useEffect, useState } from "react";
import type { ProductFilter, ProductPreview } from "../../types/ProdcutTypes";
import ProductCard from "../ui/ProductCard";

const ProdcutsRow = (props: { title: string; link?: string; filter: ProductFilter }) => {

  const [products, setProducts] = useState<ProductPreview[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const serverURL = import.meta.env.VITE_SERVER_URL;
      const filterQuery = props.filter;

      try {
        const res = await fetch(`${serverURL}/products?page=1&limit=10&${filterQuery}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, [props.filter])

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ">{props.title}</h2>
        {
          props.link ?
            <a href={props.link} className="text-[var(--primary-2)]">
              View More
            </a> : null
        }
      </div>

      <div className="overflow-x-auto">
        <div className="flex space-x-4 w-fit">
          {products.map((item, i) => <ProductCard {...item} key={i} />)}
        </div>
      </div>
    </section>
  )
};

export default ProdcutsRow;