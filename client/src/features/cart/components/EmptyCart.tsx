import { PiCaretRightBold } from "react-icons/pi";
import empty_cart_img from "../assets/empty_cart_img.png"
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="w-full flex flex-col text-center gap-4 m-auto p-6 rounded-xl bg-[var(--surface)]">

      <img src={empty_cart_img} />

      <h2 className="text-[var(--text-1)] text-2xl font-bold">Your cart is empty!</h2>
      <p>Looks like you haven’t added anything yet. Don’t miss out on our best deals, start shopping now!</p>
      <Link to="/" className="px-4 py-2 flex justify-center items-center gap-2 bg-[var(--primary)] text-[var(--accent)] rounded hover:bg-[var(--primary-1)] active:bg-[var(--secondary)]">
        <p className="">
          Browse Products
        </p>
        <PiCaretRightBold />
      </Link>
    </div >
  )
};

export default EmptyCart;