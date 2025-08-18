import { useEffect, useRef, useState } from "react";
import type { ProductFilter } from "../../types/ProdcutTypes";
import ProductCard from "../ui/ProductCard";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import useFetchProducts from "../../hooks/FetchProducts";
import { Link } from "react-router-dom";

type ProdcutsRowProps = {
  title: string;
  link?: string;
  filter: ProductFilter
}

const ProdcutsRow = ({ title, link, filter }: ProdcutsRowProps) => {
  const { products } = useFetchProducts({ filter });

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
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ">{title}</h2>
        {
          link ?
            <Link to={link} className="text-[var(--primary-2)]">
              View More
            </Link> : null
        }
      </div>


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
          className="flex space-x-4 overflow-hidden sscroll-smooth"
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
    </section>
  );
};

export default ProdcutsRow;