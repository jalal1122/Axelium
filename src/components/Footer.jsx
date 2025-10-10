import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-6 border-yellow">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Company Info */}
        <div data-aos="fade-up">
          <div className="flex justify-start items-center gap-4 mb-4">
          <img src="./logo.svg" alt="Axlium Menuiseries Logo" className="w-20 mb-4" />
          <img src="./logo_text.svg" alt="Axlium Menuiseries Logo" className="w-40" />
          </div>
          <p className="text-sm leading-relaxed">
            Axlium Menuiseries is a family-owned company based in Dunkirk, France,
            specializing in custom joinery, renovation, and installation services.
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-gray-1200 py-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#products" className="hover:text-white transition">Products</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-gray-1200 py-2">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" /> +33 6 12 34 56 78
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" /> contact@axlium.fr
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" /> Dunkirk, France
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-yellow hover:bg-gray-900 border hover:border border-gray-1200 p-2 rounded-full text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-yellow hover:bg-gray-900 border hover:border border-gray-1200 p-2 rounded-full text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Axlium Menuiseries — Designed by{" "}
        <span className="text-blue-600 font-semibold">Muhammad Jalal</span>
      </div>
    </footer>
  );
}
