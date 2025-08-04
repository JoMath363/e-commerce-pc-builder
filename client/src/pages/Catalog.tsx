import Navbar from "../components/layout/NavBar";
import SearchBar from "../components/sections/SearchBar";
import CatalogFilter from "../components/sections/CatalogFilter";
import CatalogGrid from "../components/sections/CatalogGrid";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";

const Catalog = () => {
  return (
    <>
      <Navbar />
      <Main>
        <SearchBar />
        <CatalogFilter />
        <CatalogGrid />
      </Main>
      <Footer />
    </>
  )
};

export default Catalog;