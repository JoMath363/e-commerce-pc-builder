import { PiCaretLeft, PiTrash } from "react-icons/pi";
import placeholder_img from "../assets/placeholder_img.png"
import { useCart } from "../../contexts/CartContext";

const CartList = () => {
  const { cart, removeFromCart, addOneToCartItem, removeOneFromCartItem } = useCart();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">
        Cart Items
      </h2>

      <div className="flex flex-col gap-4">

        {
          cart.map((product, i) =>
            <div className="h-min flex bg-[var(--surface)] rounded-xl overflow-hidden" key={i}>
              <img
                className="h-32"
                src={product.imageUrl || placeholder_img} alt=""
              />

              <div className="w-1/1 px-4 py-3 flex justify-between flex-col gap-2">
                <h2 className="font-semibold">
                  {product.name}
                </h2>
                <h3 className="font-medium">
                  $ {product.price}
                </h3>

                <div className="flex justify-between">
                  <div className="w-fit flex">
                    {
                      product.quantity > 1 ? (
                        <button
                          onClick={() => removeOneFromCartItem(i)}
                          className="p-2 border-1 border-r-0 rounded-tl rounded-bl border-[var(--border-1)] cursor-pointer hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent"
                        >
                          <PiCaretLeft />
                        </button>
                      ) : (
                        <button
                          onClick={() => removeOneFromCartItem(i)}
                          className="p-2 border-1 border-r-0 rounded-tl rounded-bl border-[var(--border-2)] text-[var(--border-1)]"
                        >
                          <PiCaretLeft />
                        </button>
                      )
                    }

                    <span className="px-3 py-1 border-1 border-[var(--border-1)]">
                      {product.quantity}
                    </span>

                    {
                      product.quantity < 20 ? (
                        <button
                          onClick={() => addOneToCartItem(i)}
                          className="p-2 border-1 border-l-0 rounded-tr rounded-br border-[var(--border-1)] cursor-pointer hover:text-[var(--text-1)] active:border-[var(--primary-1)] active:text-[var(--primary-1)] active:bg-transparent"
                        >
                          <PiCaretLeft className="rotate-180" />
                        </button>
                      ) : (
                        <button
                          onClick={() => addOneToCartItem(i)}
                          className="p-2 border-1 border-l-0 rounded-tr rounded-br border-[var(--border-2)] text-[var(--border-1)]"
                        >
                          <PiCaretLeft className="rotate-180" />
                        </button>
                      )
                    }
                  </div>

                  <button
                    onClick={() => removeFromCart(i)}
                    className="border-1 border-[var(--negative)] p-1 text-2xl text-[var(--negative)] rounded cursor-pointer hover:bg-[var(--negative)] hover:text-[var(--background)] active:bg-[var(--background)] active:text-[var(--text-1)] active:border-[var(--text-1)]"
                  >
                    <PiTrash />
                  </button>
                </div>



              </div>


            </div>
          )
        }
      </div>
    </section>
  )
};

export default CartList;