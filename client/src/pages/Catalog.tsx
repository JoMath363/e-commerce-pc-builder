import Navbar from "../components/layout/NavBar";
import SearchBar from "../components/ui/SearchBar";
import Filter from "../components/sections/Filter";
import ProductsGrid from "../components/sections/ProductsGrid";
import Footer from "../components/layout/Footer";

const Catalog = () => {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Filter/>
      <ProductsGrid/>
      <Footer/>
    </>
  )
};

export default Catalog;