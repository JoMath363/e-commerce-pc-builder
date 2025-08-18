import { PiArrowRightBold } from "react-icons/pi";
import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import CartList from "../components/sections/CartList";
import CartPrice from "../components/sections/CartPrice";
import { Link, useLoaderData } from "react-router-dom";
import type { CartItem } from "../types/CartTypes";
import EmptyCart from "../components/sections/EmptyCart";

const Cart = () => {
  const { cart }: { cart: CartItem[] } = useLoaderData();

  return (
    <>
      <NavBar />
      <Main>
        {
          cart.length > 0 ? (
            <>
              <CartList />
              <CartPrice />
              <Link to="/" className="p-3 flex items-center justify-center gap-2 bg-[var(--positive)] rounded text-[var(--background)]">
                <span className="text-xl font-medium">Place Order</span>
                <PiArrowRightBold className="text-2xl" />
              </Link>
            </>
          ) : (
            <EmptyCart />
          )
        }
      </Main>
      <Footer />
    </>
  )
};

export default Cart;