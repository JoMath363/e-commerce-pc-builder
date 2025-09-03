import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import NavBar from "../components/layout/NavBar";
import CategoryRow from "../components/CategoryRow";
import ProductsRow from "../features/product/components/ProdcutsRow";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

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
