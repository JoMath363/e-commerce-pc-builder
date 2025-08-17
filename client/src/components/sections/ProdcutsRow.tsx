import { useEffect, useRef, useState } from "react";
import type { ProductFilter, ProductPreview } from "../../types/ProdcutTypes";
import ProductCard from "../ui/ProductCard";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

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

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScroll);
    return () => container.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="group relative w-full">
      {
        canScrollLeft ? (
          <button
            onClick={() => scroll("left")}
            className="absolute hidden left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[var(--background)] p-2 group-hover:block cursor-pointer border-1 border-[var(--border-2)] text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent"
          >
            <PiCaretLeftBold />
          </button>
        ) : (
          <button
            className="absolute hidden left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[var(--surface)] p-2 group-hover:block border-1 border-[var(--border-2)] text-[var(--border-2)]"
          >
            <PiCaretLeftBold />
          </button>
        )
      }

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {products.map((item, i) => <ProductCard key={i} {...item} />)}
      </div>

      {
        canScrollRight ? (
          <button
            onClick={() => scroll("right")}
            className="absolute hidden right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[var(--background)] p-2 group-hover:block cursor-pointer border-1 border-[var(--border-2)] text-[var(--text-2)] hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent"
          >
            <PiCaretRightBold />
          </button>
        ) : (
          <button
            className="absolute hidden right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[var(--surface)] p-2 group-hover:block border-1 border-[var(--border-2)] text-[var(--border-2)]"
          >
            <PiCaretRightBold />
          </button>
        )
      }
    </div>
  );
};

export default ProdcutsRow;