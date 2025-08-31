import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import CartList from "../components/cart/CartList";
import CartPrice from "../components/cart/CartPrice";
import PageTitle from "../components/common/PageTitle";
import NextPageBtn from "../components/common/NextPageBtn";

const Cart = () => {
  return (
    <>
      <NavBar />
      <Main>
        <PageTitle text="Your Cart" />
        <CartList />
        <CartPrice />
        <NextPageBtn text="Place Order" path="/checkout"/>
      </Main>
      <Footer />
    </>
  )
};

export default Cart;