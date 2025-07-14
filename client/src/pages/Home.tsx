import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import FeaturedCategories from "../components/sections/FeaturedCategories";
import FeaturedProducts from "../components/sections/FeaturedProdcuts";
import Hero from "../components/sections/Hero";

import { cpus, cases, motherboards } from "../utils/mock.json";

const Home = () => {
  return (
    <>
      <Navbar />
      <FeaturedCategories />
      <Hero />
      <FeaturedProducts title="Best Sellers" link="" products={cpus} />
      <FeaturedProducts title="New Arrivals" link="" products={cases} />
      <FeaturedProducts title="Build Essentials" link="" products={motherboards} />
      <Footer />
    </>
  )
};

export default Home;
