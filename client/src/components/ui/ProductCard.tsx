import { } from "react-icons/pi";
import placeholder_img from "../../assets/placeholder_img.png"
import type { ProductPreview } from "../../utils/types";

const ProductCard = (props: ProductPreview) => {
  return (
    <a className="min-fit bg-[var(--surface)] rounded">
      <img className="rounded" src={props.imageUrl || placeholder_img} alt="" />

      <div className="p-2 flex flex-col gap-2">
        <h2 className="h-12 font-medium line-clamp-2 text-ellipsis">
          {props.name}
        </h2>

        <div className="flex items-center gap-2 justify-between ">
          <p className="text-[var(--positive)] text-lg font-medium">
            ${(props.price || 0).toFixed(2)}
          </p>

          <p className="text-[var(--text-2)] text-sm line-through">
            $1000,00
          </p>
        </div>
      </div>

    </a>
  )
};

export default ProductCard;

