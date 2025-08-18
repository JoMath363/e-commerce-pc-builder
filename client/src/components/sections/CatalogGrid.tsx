import { } from "react-icons/pi";
import ProductCard from "../ui/ProductCard";
import Pagination from "../ui/Pagination";
import useFetchCatalog from "../../hooks/FetchCatalog";

const CatalogGrid = () => {
  const { products, page, setPage } = useFetchCatalog();

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