import type { Dispatch, SetStateAction } from "react";
import { PiCaretLeftBold } from "react-icons/pi";

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {

  const getPages = () => {
    const pagesCount = Math.min(5, totalPages);

    if (page <= pagesCount / 2) {
      return Array.from({ length: pagesCount }, (_, i) => 1 + i)
    }

    if (page > totalPages - pagesCount / 2) {
      return Array.from({ length: pagesCount }, (_, i) => Math.max(1, totalPages - pagesCount + 1) + i);
    }

    return Array.from({ length: pagesCount }, (_, i) => page - Math.floor(pagesCount / 2) + i)
  }

  return (
    <div className="mt-4 flex justify-center items-end gap-2 select-none">
      {
        page != 1 ?
          <button
            className="p-2 border-1 border-[var(--border-1)] rounded-lg text-xl text-[var(--text-2)] cursor-pointer hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent"
            onClick={() => setPage(x => Math.max(1, x - 1))}
          >
            <PiCaretLeftBold />
          </button> : null
      }


      {
        getPages().map(n => n == page ? (
          <button
            className="p-1 px-3 bg-[var(--primary-2)] border-1 border-[var(--primary-2)] text-[var(--background)] rounded-lg text-xl cursor-pointer"
            key={n}
          >
            <span>{n}</span>
          </button>
        ) : (
          <button
            className="p-1 px-3 border-1 border-[var(--border-1)] rounded-lg text-xl text-[var(--text-2)] cursor-pointer hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent"
            onClick={() => setPage(n)} key={n}
          >
            <span>{n}</span>
          </button>
        )
        )
      }

      {
        page != totalPages ?
          <button
            className="p-2 border-1 border-[var(--border-1)] rounded-lg text-xl text-[var(--text-2)] cursor-pointer hover:bg-[var(--surface)] hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent"
            onClick={() => setPage(x => Math.min(totalPages, x + 1))}
          >
            <PiCaretLeftBold className="rotate-180" />
          </button> : null
      }

    </div>
  )
};

export default Pagination;