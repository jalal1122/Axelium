import { Link } from "react-router";

export default function About() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left: Image */}
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src="./workshop.jpg"
            alt="Axlium Menuiseries Workshop"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Axlium Menuiseries
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Axlium Menuiseries est une entreprise familiale basée à Dunkerque,
            dans le nord de la France, forte de plus de 10 ans
            d&rsquo;expérience dans le secteur du bâtiment. <br />
            Héritiers d&rsquo;un savoir-faire artisanal, nous sommes spécialisés
            dans la rénovation intérieure et extérieure et avons élargi notre
            activité à la vente et à l&rsquo;installation de fenêtres, portes
            vitrées, portes de garage et autres produits de menuiserie sur
            mesure. <br />
            Chaque projet est réalisé avec soin et précision par nos artisans
            qualifiés, garantissant qualité, fiabilité et satisfaction à nos
            clients.
          </p>
          <Link
            to="/contact"
            className="button-special text-xl font-bold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
