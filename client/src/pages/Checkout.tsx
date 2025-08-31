import {  } from "react-icons/pi";
import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import PageTitle from "../components/common/PageTitle";
import ChooseAddress from "../components/checkout/ChooseAddress";
import ChoosePayment from "../components/checkout/ChoosePayment";
import OrderInfo from "../components/checkout/OrderInfo";
import NextPageBtn from "../components/common/NextPageBtn";

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