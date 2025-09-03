import {  } from "react-icons/pi";
import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import PageTitle from "../components/PageTitle";
import ChooseAddress from "../features/checkout/components/ChooseAddress";
import ChoosePayment from "../features/checkout/components/ChoosePayment";
import OrderInfo from "../features/checkout/components/OrderInfo";
import NextPageBtn from "../components/NextPageBtn";

const Checkout = () => {
  return (
    <>
      <NavBar/>
      <Main>
        <PageTitle text="Checkout"/>
        <ChooseAddress/>
        <ChoosePayment/>
        <OrderInfo/>
        <NextPageBtn text="Confirm Order" path="/confirmation"/>
      </Main>
      <Footer/>
    </>
  )
};

export default Checkout;