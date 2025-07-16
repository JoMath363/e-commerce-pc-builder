import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import CategoryRow from "../components/sections/CategoryRow";
import FeaturedProducts from "../components/sections/FeaturedProdcuts";
import Hero from "../components/sections/Hero";
import SearchBar from "../components/ui/SearchBar";
const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <CategoryRow />
      <Hero />
      <FeaturedProducts
        title="Best Sellers"
        link="/catalog"
        filter={{ categories: [], minPrice: 0, maxPrice: 2000 }}
      />
      <FeaturedProducts
        title="New Arrivals"
        link="/catalog"
        filter={{ categories: [], minPrice: 0, maxPrice: 2000 }}
      />
      <FeaturedProducts
        title="Build Essentials"
        link="/catalog"
        filter={{ categories: [], minPrice: 0, maxPrice: 2000 }}
      />
      <Footer />
    </>
  )
};

export default Home;
