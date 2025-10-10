import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import ProductRange from "../components/Home/ProductRange";
import TrustSection from "../components/Home/TrustSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <ProductRange />
      <TrustSection />
      <About />
    </main>
  );
};

export default Home;
