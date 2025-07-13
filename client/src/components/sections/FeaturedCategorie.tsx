import type { ProductPreview } from "../../utils/types";
import ProductCard from "../ui/ProductCard";

const FeaturedCategorie = (props: { title: string; link: string; products: ProductPreview[] }) => {
  return (
    <section className="mt-8 m-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ">{props.title}</h2>
        <a href={props.link} className="text-[var(--primary-2)]">View More</a>
      </div>

      <div className="overflow-x-auto">
        <div className="flex space-x-4 w-fit">
          {props.products.map((item) => <ProductCard {...item}/>)}
        </div>
      </div>
    </section>
  )
};

export default FeaturedCategorie;