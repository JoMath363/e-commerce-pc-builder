import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import CategoryRow from "../components/sections/CategoryRow";
import FeaturedProducts from "../components/sections/FeaturedProdcuts";
import Hero from "../components/sections/Hero";
import SearchBar from "../components/ui/SearchBar";

import { components } from "../utils/mock.json";

const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar/>
      <CategoryRow />
      <Hero />
      <FeaturedProducts title="Best Sellers" link="/catalog" products={components} />
      <FeaturedProducts title="New Arrivals" link="/catalog" products={components} />
      <FeaturedProducts title="Build Essentials" link="/catalog" products={components} />
      <Footer />
    </>
  )
};

export default Home;
