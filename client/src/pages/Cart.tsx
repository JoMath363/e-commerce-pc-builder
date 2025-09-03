import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import CartList from "../features/catalog/components/CartList";
import CartPrice from "../features/cart/components/CartPrice";
import PageTitle from "../components/PageTitle";
import NextPageBtn from "../components/NextPageBtn";

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