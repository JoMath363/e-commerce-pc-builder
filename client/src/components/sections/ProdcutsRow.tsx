import { useProduct } from "../../contexts/ProductContext";
import type { ProductFilter } from "../../types/ProdcutTypes";
import ProductCard from "../ui/ProductCard";

const ProdcutsRow = (props: { title: string; link?: string; filter: ProductFilter }) => {

  const { fetchCatalog } = useProduct();

  const products = fetchCatalog(0);

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
          {products.map((item) => <ProductCard {...item} />)}
        </div>
      </div>
    </section>
  )
};

export default ProdcutsRow;