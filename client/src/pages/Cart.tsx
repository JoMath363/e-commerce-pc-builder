import { } from "react-icons/pi";
import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import CartList from "../components/sections/CartList";

const Cart = () => {
  return (
    <>
      <NavBar />
      <Main>
        <CartList/>
      </Main>
      <Footer />
    </>
  )
};

export default Cart;