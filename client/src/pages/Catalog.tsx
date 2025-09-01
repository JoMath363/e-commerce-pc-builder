import Navbar from "../components/layout/NavBar";
import CatalogGrid from "../components/catalog/CatalogGrid";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import CatalogSearch from "../components/catalog/CatalogSearch";

const Catalog = () => {
  return (
    <>
      <Navbar />
      <Main>
        <CatalogSearch/>
        <CatalogGrid />
      </Main>
      <Footer />
    </>
  )
};

export default Catalog;