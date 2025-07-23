import { PiBasketBold } from "react-icons/pi";
import { products_data } from "../../utils/mock.json";
import placeholder_img from "../assets/placeholder_img.png";
import { unslug } from "../../utils/helper";

const ProductDisplay = () => {
  const { name, price, description, specs, imageUrl } = products_data[0];

  return (
    <section className="flex flex-col gap-4">
      <div className="w-1/1">
        <img
          className="w-1/1 rounded-lg"
          src={imageUrl ? imageUrl : placeholder_img}
        />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">
          {name}
        </h1>

        <div className="text-2xl font-medium">
          $ {price.toFixed(2)}
        </div>

        <p>
          {description}
        </p>
      </div>

      <button
        className="p-2 flex items-center justify-center gap-2 bg-[var(--positive)] rounded text-[var(--background)]"
      >
        <PiBasketBold className="text-2xl" />
        <span className="text-xl font-medium">Add to Cart</span>
      </button>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg">
          Specifications
        </h2>

        {
          Object.entries(specs).map(([key, value], i) =>
            <div
              className="flex justify-between"
              key={i}
            >
              <span>{unslug(key)}</span>
              <span>{String(value)}</span>
            </div>
          )
        }
      </div>


    </section>
  )
};

export default ProductDisplay;