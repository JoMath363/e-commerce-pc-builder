import Navbar from "../components/layout/NavBar";
import SearchBar from "../components/sections/SearchBar";
import ProductsFilter from "../components/sections/ProductsFilter";
import ProductsGrid from "../components/sections/ProductsGrid";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";

const Catalog = () => {
  return (
    <>
      <Navbar />
      <Main>
        <SearchBar />
        <ProductsFilter />
        <ProductsGrid />
      </Main>
      <Footer />
    </>
  )
};

export default Catalog;