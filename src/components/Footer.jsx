import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-6 border-yellow">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div data-aos="fade-up">
          <div className="flex justify-start items-center gap-4 mb-4">
            <img
              src="/logo.svg"
              alt="Logo Axlium Menuiseries"
              className="w-20 mb-4"
            />
            <img
              src="/logo_text.svg"
              alt="Texte du logo Axlium Menuiseries"
              className="w-40"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Axelium Menuiseries est une entreprise basée à Dunkerque, en France,
            spécialisée dans la menuiserie sur mesure, la rénovation et
            l&rsquo;installation. Elle offre des solutions complètes et
            personnalisées, alliant expertise technique, qualité des matériaux
            et excellence du service, pour répondre aux exigences de chaque
            projet.
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-gray-1200 py-2">
            Liens rapides
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white transition">
                Accueil
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition">
                Produits
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-gray-1200 py-2">
            Contact
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow" />
              <a
                href="https://wa.me/33757828337"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow transition"
                aria-label="Contacter via WhatsApp"
              >
                +33757828337
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=axelium.menuiseries@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow transition"
                aria-label="Envoyer un email via Gmail"
              >
                axelium.menuiseries@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow" />
              <a
                href="https://www.google.com/maps?q=13+Rue+Alfred+Dumont+59140+Dunkerque+France"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow transition"
                aria-label="Ouvrir l'adresse dans Google Maps"
              >
                13 Rue Alfred Dumont 59140 Dunkerque, France
              </a>
            </li>
          </ul>

          {/* Socials */}
          {/* <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="bg-yellow hover:bg-gray-900 border hover:border border-gray-1200 p-2 rounded-full text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-yellow hover:bg-gray-900 border hover:border border-gray-1200 p-2 rounded-full text-white"
            >
              <FaInstagram />
            </a>
          </div> */}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Axelium Menuiseries — Conçu par{" "}
        <span className="text-blue-600 font-semibold">Muhammad Jalal</span>
      </div>
    </footer>
  );
}
