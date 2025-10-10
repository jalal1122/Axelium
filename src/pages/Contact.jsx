import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import heroImage from "../assets/Contact/heroImage.png";

const Contact = () => {
  return (
    <section>
      {/* Hero section of Contact */}
      <div
        className="relative w-full h-[30vh] flex justify-center items-center text-white flex-col gap-4"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="z-10 flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold">Contactez-nous</h1>
          <p className="text-lg font-semibold">Nous serons ravis de vous conseiller et de vous fournir un devis personnalisé.</p>
        </div>

        {/* Overlay */}
        <div className="w-full h-full bg-black/40 absolute"></div>
      </div>

      {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-900">
          {/* Contact Form */}
          <div className=" p-8 rounded-2xl shadow-md" data-aos="fade-right">
            <form
              action="https://formsubmit.co/your@email.com" // replace later or use EmailJS
              method="POST"
              className="space-y-5"
            >
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
                  placeholder="jean.dupont@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
                  placeholder="Bonjour, je souhaite un devis pour..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-transform duration-300 hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Company Info + Map */}
          <div className="flex flex-col justify-between" data-aos="fade-left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nos coordonnées</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-700 text-lg" />
                  Dunkerque, France
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-700 text-lg" />
                  +33 6 12 34 56 78
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-700 text-lg" />
                  contact@axlium.fr
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-md h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.158719682753!2d2.3768777!3d51.031689199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc8c62eeebd7ff%3A0xa2f67015b20993e2!2s13%20Rue%20Alfred%20Dumont%2C%2059140%20Dunkerque%2C%20France!5e0!3m2!1sen!2s!4v1760108788855!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
