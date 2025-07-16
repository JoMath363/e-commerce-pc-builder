import { } from "react-icons/pi";
import { useProduct } from "../../contexts/ProdcutContext";
import ProductCard from "../ui/ProductCard";

const ProductsGrid = () => {
  const { fetchProducts } = useProduct();

  const products = fetchProducts();

  return (
    <section className="mx-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ">Catalog</h2>
        <p className="text-[var(--text-2)]">120 results</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((item) => <ProductCard {...item} />)}
      </div>
    </section>
  )
};

export default ProductsGrid;