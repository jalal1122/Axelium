import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import ProductRange from "../components/Home/ProductRange";
import TrustSection from "../components/Home/TrustSection";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <main>
      <SEO
        title="Fenêtres, Portes, Coulissants, Volets | Axelium Menuiseries"
        description="Fabrication et pose de menuiseries en PVC, aluminium et bois en France: fenêtres, portes d'entrée, systèmes coulissants et volets roulants. Conseils, devis gratuit et qualité premium."
        canonical="https://axelium.eu/"
        image="https://axelium.eu/logo.svg"
      />
      <Hero />
      <ProductRange />
      <TrustSection />
      <About />
    </main>
  );
};

export default Home;
