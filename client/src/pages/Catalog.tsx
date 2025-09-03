import Navbar from "../components/layout/NavBar";
import CatalogGrid from "../features/catalog/components/CatalogGrid";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import CatalogSearch from "../features/catalog/components/CatalogSearch";

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