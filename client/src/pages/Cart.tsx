import { PiArrowRightBold } from "react-icons/pi";
import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import CartList from "../components/sections/CartList";
import CartPrice from "../components/sections/CartPrice";

const Cart = () => {
  return (
    <>
      <NavBar />
      <Main>
        <CartList />
        <CartPrice />
        <a href="/" className="p-3 flex items-center justify-center gap-2 bg-[var(--positive)] rounded text-[var(--background)]">
          <span className="text-xl font-medium">Place Order</span>
          <PiArrowRightBold className="text-2xl" />
        </a>
      </Main>
      <Footer />
    </>
  )
};

export default Cart;