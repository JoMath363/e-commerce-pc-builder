import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import NavBar from "../components/layout/NavBar";
import CategoryRow from "../components/sections/CategoryRow";
import ProductsRow from "../components/sections/ProdcutsRow";
import Hero from "../components/sections/Hero";
import SearchBar from "../components/sections/SearchBar";

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
