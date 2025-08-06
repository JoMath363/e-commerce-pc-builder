import type { Dispatch, SetStateAction } from "react";
import { } from "react-icons/pi";

type PriceRangeProps = {
  minPrice: number;
  maxPrice: number;
  setMinPrice: Dispatch<SetStateAction<number>>
  setMaxPrice: Dispatch<SetStateAction<number>>
}

const PriceRange = (props: PriceRangeProps) => {
  return (
    <div className="flex justify-center border-1 border-[var(--border-1)] rounded-lg">

      <label className="px-2 py-1 border-r-1 border-[var(--border-1)] outline-none">
        <span className="text-sm text-[var(--text-2)]">
          Min
        </span>
        <div className="flex gap-1 text-lg">
          <span>$</span>
          <input
            type="text"
            value={props.minPrice}
            onChange={(e) => props.setMinPrice(Number(e.target.value))}
            className="w-1/1 outline-none"
          />
        </div>
      </label>

      <label className="px-2 py-1 border-[var(--border-1)] outline-none">
        <span className="text-sm text-[var(--text-2)]">
          Max
        </span>
        <div className="flex gap-1 text-lg">
          <span>$</span>
          <input
            type="text"
            value={props.maxPrice}
            onChange={(e) => props.setMaxPrice(Number(e.target.value))}
            className="w-1/1 outline-none"
          />
        </div>
      </label>
    </div>
  )
};

export default PriceRange;