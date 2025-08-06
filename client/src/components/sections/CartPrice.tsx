import { } from "react-icons/pi";
import { useCart } from "../../contexts/CartContext";

const CartPrice = () => {
  const { cart } = useCart();

  return (
    <section className="p-4 flex flex-col gap-2 bg-[var(--surface)] rounded-xl">
      <h2 className="font-bold text-lg">
        Price Details
      </h2>

      <h2 className="font-semibold">
        {cart.reduce((acc, cur) => acc += cur.quantity, 0)} Items
      </h2>

      <div className="flex flex-col gap-1">
        {
          cart.map((product, i) =>
            <div className="flex justify-between" key={i}>
              <span  className="text-[var(--text-2)]">
                {product.quantity}x {product.name}
              </span>
              <span className="font-medium">
                ${(product.price * product.quantity).toFixed(2)}
              </span>
            </div>
          )
        }
        <div className="flex justify-between">
          <span className="text-[var(--text-2)]">
            Delivery charges
          </span >
          <span className="font-medium">
            FREE
          </span>
        </div>
      </div>

      <hr className="text-[var(--border-2)] border-1" />

      <div className="flex justify-between">
        <span className="font-semibold">
          Total Amount
        </span >
        <span className="font-medium">
          ${(cart.reduce((acc, cur) => acc += cur.price * cur.quantity, 0).toFixed(2))}
        </span>
      </div>
    </section>
  )
};

export default CartPrice;