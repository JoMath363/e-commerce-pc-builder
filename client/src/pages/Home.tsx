import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import FeaturedCategories from "../components/sections/FeaturedCategories";
import FeaturedProducts from "../components/sections/FeaturedProdcuts";
import Hero from "../components/sections/Hero";
import SearchBar from "../components/ui/SearchBar";

import { cpus, cases, motherboards } from "../utils/mock.json";

const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar/>
      <FeaturedCategories />
      <Hero />
      <FeaturedProducts title="Best Sellers" link="/catalog" products={cpus} />
      <FeaturedProducts title="New Arrivals" link="/catalog" products={cases} />
      <FeaturedProducts title="Build Essentials" link="/catalog" products={motherboards} />
      <Footer />
    </>
  )
};

export default Home;
