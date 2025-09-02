import { PiBasketBold } from "react-icons/pi";
import placeholder_img from "../assets/placeholder_img.png";
import { unslug } from "../../utils/helper";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../contexts/cart/CartContext";
import useFetchProduct from "../../hooks/FetchProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const { cart, addCartItem, removeCartItem } = useCartContext();
  const { product } = useFetchProduct(id || "");

  return product != null && (
    <section className="flex flex-col gap-4">
      <div className="w-1/1">
        <img
          className="w-1/1 rounded-lg aspect-square object-cover"
          src={product.imageUrl ? product.imageUrl : placeholder_img}
        />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">
          {product.name}
        </h1>

        <div className="text-2xl font-medium">
          ${product.price}
        </div>

        <p>
          {product.description}
        </p>
      </div>

      {
        cart.find(({ product }) => product.id == id) ? (
          <button
            onClick={() => removeCartItem({ id })}
            className="p-3 flex items-center justify-center gap-2 bg-[var(--negative)] rounded text-[var(--background)]"
          >
            <PiBasketBold className="text-2xl" />
            <span className="text-xl font-medium">Remove From Cart</span>
          </button>
        ) : (
          <button
            onClick={() => addCartItem({
              id,
              name: product?.name,
              price: product?.price,
              imageUrl: product?.imageUrl,
            })}
            className="p-3 flex items-center justify-center gap-2 bg-[var(--positive)] rounded text-[var(--background)]"
          >
            <PiBasketBold className="text-2xl" />
            <span className="text-xl font-medium">Add To Cart</span>
          </button>
        )
      }


      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-xl text-center">
          Specifications
        </h2>

        <div className="w-1/1 border-1 border-b-0 border-[var(--border-2)] border-collapse rounded">
          {
            Object.entries(product.specs).map(([key, value], i) =>
              <div className="flex justify-between border-b-1 border-[var(--border-2)]" key={i}>
                <span className="px-4 py-2 basis-2/5 font-medium">
                  {unslug(key)}
                </span>
                <span className="p-2 basis-3/5 flex items-center justify-center border-l-1 border-[var(--border-2)]">
                  {value}
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