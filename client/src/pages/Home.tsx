import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import NavBar from "../components/layout/NavBar";
import CategoryRow from "../components/common/CategoryRow";
import ProductsRow from "../components/common/ProdcutsRow";
import Hero from "../components/common/Hero";
import SearchBar from "../components/common/SearchBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Main>
        <SearchBar />
        <CategoryRow />
        <Hero />
        <ProductsRow
          title="Best Sellers"
          link="/catalog"
          filter={{ categories: [], minPrice: 0, maxPrice: 2000 }}
        />
        <ProductsRow
          title="New Arrivals"
          link="/catalog"
          filter={{ categories: [], minPrice: 0, maxPrice: 2000 }}
        />
        <ProductsRow
          title="Build Essentials"
          link="/catalog"
          filter={{ categories: [], minPrice: 0, maxPrice: 2000 }}
        />
      </Main>
      <Footer />
    </>
  )
};

export default Home;
