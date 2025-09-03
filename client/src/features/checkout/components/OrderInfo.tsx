import { useCartContext } from "../../../contexts/cart/CartContext";

const OrderInfo = () => {
  const { cart } = useCartContext();

  return (
    <section className="p-4 flex flex-col gap-2 bg-[var(--surface)] rounded-xl mb-2">
      <h2 className="text-lg font-semibold">
        Order Details
      </h2>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <span className="text-[var(--text-2)]">
            Subtotal ({cart.reduce((acc, cur) => acc += cur.quantity, 0)})
          </span>
          <span className="font-medium">
            ${(cart.reduce((acc, cur) => acc += cur.price * cur.quantity, 0).toFixed(2))}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--text-2)]">
            Delivery charges
          </span >
          <span className="font-medium">
            $0.00
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

export default OrderInfo;