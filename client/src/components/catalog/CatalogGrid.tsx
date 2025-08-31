import { } from "react-icons/pi";
import ProductCard from "../common/ProductCard";
import Pagination from "../common/Pagination";
import useFetchCatalog from "../../hooks/FetchCatalog";
import { useCatalogContext } from "../../contexts/CatalogContext";

const CatalogGrid = () => {
  const { products, totalProducts, totalPages } = useFetchCatalog();
  const { page, setPage } = useCatalogContext();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ">Catalog</h2>
        <p className="text-[var(--text-2)]">{totalProducts} results</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((item, i) => <ProductCard {...item} key={i} />)}
      </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </section>
  )
};

export default CatalogGrid;