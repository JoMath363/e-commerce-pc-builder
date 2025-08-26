import Navbar from "../components/layout/NavBar";
import SearchBar from "../components/generic/SearchBar";
import CatalogFilter from "../components/catalog/CatalogFilter";
import CatalogGrid from "../components/catalog/CatalogGrid";
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