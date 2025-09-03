import {  } from "react-icons/pi";
import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import SearchBar from "../components/SearchBar";
import ProductDetails from "../features/product/components/ProdcutDetails";
import ProdcutsRow from "../features/product/components/ProdcutsRow";
import Footer from "../components/layout/Footer";

const Product = () => {
  return (
    <>
      <NavBar/>
      <Main>
        <SearchBar/>
        <ProductDetails/>
        <ProdcutsRow
          title="New Arrivals"
          filter={{ categories: [], minPrice: 0, maxPrice: 2000 }}
        />
      </Main>
      <Footer/>
    </>
  )
};

export default Product;