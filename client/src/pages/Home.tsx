import Navbar from "../components/layout/Navbar";
import CategorieRow from "../components/sections/CategorieRow";
import FeaturedCategorie from "../components/sections/FeaturedCategorie";
import Hero from "../components/sections/Hero";

import { cpus, cases } from "../utils/mock.json";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategorieRow />
      <Hero />
      <FeaturedCategorie title="Best Sellers" link="" products={cpus} />
      <FeaturedCategorie title="Build Essentials" link="" products={cases} />
    </>
  )
};

export default Home;
