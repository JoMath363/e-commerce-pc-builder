import { PiBasketBold, PiCheckBold, PiXBold } from "react-icons/pi";
import { products_data } from "../../utils/mock.json";
import placeholder_img from "../assets/placeholder_img.png";
import { unslug } from "../../utils/helper";

const ProductDetails = () => {
  const { name, price, description, specs, imageUrl } = products_data[0];

  return (
    <section className="flex flex-col gap-4">
      <div className="w-1/1">
        <img
          className="w-1/1 rounded-lg aspect-square object-cover"
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
        className="p-3 flex items-center justify-center gap-2 bg-[var(--positive)] rounded text-[var(--background)]"
      >
        <PiBasketBold className="text-2xl" />
        <span className="text-xl font-medium">Add to Cart</span>
      </button>

      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-xl text-center">
          Specifications
        </h2>

        <div className="w-1/1 border-1 border-b-0 border-[var(--border-2)] border-collapse rounded">
          {
            Object.entries(specs).map(([key, value], i) =>
              <div className="flex justify-between border-b-1 border-[var(--border-2)]" key={i}>
                <span className="px-4 py-2 basis-2/5 font-medium">
                  {unslug(key)}
                </span>
                <span className="p-2 basis-3/5 flex items-center justify-center border-l-1 border-[var(--border-2)]">
                  {
                    typeof value == "boolean" ? (
                      value ? <PiCheckBold /> : <PiXBold/>
                    ) : (
                      String(value)
                    )
                  }
                </span>
              </div>
            )
          }
        </div>

      </div>


    </section >
  )
};

export default ProductDetails;