import React, { useState } from "react";
import { } from "react-icons/pi";

type PriceRangeProps = {
  minPrice: number | "";
  maxPrice: number | "";
  setMinPrice: (value: number | "") => void;
  setMaxPrice: (value: number | "") => void;
}

const PriceRange = (props: PriceRangeProps) => {
  const minValue = 0;
  const maxValue = 10000;

  const formatPrice = (value: number | "") => {
    if (value === "") return "";
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const clampValue = (num: number | "") => {
    if (num === "") return "";
    if (num < minValue) return minValue;
    if (num > maxValue) return maxValue;
    return num;
  };

  const parsePrice = (val: string) => {
    const clean = val.replace(/,/g, "");
    const num = Number(clean);
    return isNaN(num) ? "" : num;
  };

  const [minDisplay, setMinDisplay] = useState(formatPrice(props.minPrice));
  const [maxDisplay, setMaxDisplay] = useState(formatPrice(props.maxPrice));

  const handleFormattedChange = (
    setterValue: (value: number | "") => void,
    setterDisplay: (value: string) => void
  ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      const num = parsePrice(val);
      setterValue(num);
      setterDisplay(val);
    };

  const handleBlur = (
    displayValue: string, setterDisplay: (value: string) => void
  ) =>
    () => {
      const num = parsePrice(displayValue);
      setterDisplay(formatPrice(clampValue(num)));
    };

  return (
    <div className="flex justify-center border border-[var(--border-1)] rounded-lg">
      <label className="px-2 py-1 border-r border-[var(--border-1)]">
        <span className="text-sm text-[var(--text-2)]">Min</span>
        <div className="flex gap-1 text-lg">
          <span>$</span>
          <input
            type="text"
            inputMode="decimal"
            value={minDisplay}
            onChange={handleFormattedChange(props.setMinPrice, setMinDisplay)}
            onBlur={handleBlur(minDisplay, setMinDisplay)}
            className="w-full outline-none"
          />
        </div>
      </label>

      <label className="px-2 py-1">
        <span className="text-sm text-[var(--text-2)]">Max</span>
        <div className="flex gap-1 text-lg">
          <span>$</span>
          <input
            type="text"
            inputMode="decimal"
            value={maxDisplay}
            onChange={handleFormattedChange(props.setMaxPrice, setMaxDisplay)}
            onBlur={handleBlur(maxDisplay, setMaxDisplay)}
            className="w-full outline-none"
          />
        </div>
      </label>
    </div>
  );
};

export default PriceRange;
