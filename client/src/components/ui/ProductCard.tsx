import { } from "react-icons/pi";
import placeholder_img from "../../assets/placeholder_img.png"
import type { ProductPreview } from "../../utils/types";

const ProductCard = (props: ProductPreview) => {
  return (
    <a className="min-w-30 flex flex-col gap-2">
      <img src={props.imageUrl || placeholder_img} alt="" />

      <h2 className="h-12 font-medium line-clamp-2 text-ellipsis">
        {props.name}
      </h2>

      <div className="flex flex-col justidy-between ">
        <p className="text-[var(--negative)] text-sm line-through">
          $500,00
        </p>
        <p className="text-[var(--positive)] text-lg font-medium">
          ${(props.price || 0).toFixed(2)}
        </p>
      </div>
    </a>
  )
};

export default ProductCard;

