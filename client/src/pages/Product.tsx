import {  } from "react-icons/pi";
import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import SearchBar from "../components/sections/SearchBar";
import ProductDisplay from "../components/sections/ProdcutDisplay";

const Product = () => {
  return (
    <>
      <NavBar/>
      <Main>
        <SearchBar/>
        <ProductDisplay/>
      </Main>
    </>
  )
};

export default Product;