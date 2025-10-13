import { Link } from "react-router";

export default function About() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left: Image */}
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            fetchPriority="high"
            src="./workshop.jpg"
            alt="Axlium Menuiseries Workshop"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Axelium Menuiseries
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Axelium Menuiseries est une entreprise basée à Dunkerque, dans le
            nord de la France. Spécialisée dans la rénovation intérieure et
            extérieure, elle propose également la vente et l&rsquo;installation
            de fenêtres, portes vitrées, portes de garage et autres produits de
            menuiserie sur mesure. Chaque projet est réalisé avec soin et
            précision par des artisans qualifiés, garantissant qualité,
            fiabilité et satisfaction à nos clients.
          </p>
          <Link to="/contact" className="button-special text-xl font-bold">
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
}
