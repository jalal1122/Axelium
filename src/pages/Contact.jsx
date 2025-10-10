import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import heroImage from "../assets/Contact/heroImage.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);
    toast.loading("Sending email...");

    emailjs
      .sendForm(
        "service_iu0pbcp", // 🔹 Replace with your Service ID
        "template_dkid99g", // 🔹 Replace with your Template ID
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // 🔹 Replace with your Public Key
      )
      .then(
        (_result) => {
          setIsLoading(false);
          toast.dismiss(); // remove loading
          toast.success("✅ Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          setIsLoading(false);
          toast.dismiss();
          toast.error("❌ Failed to send email. Try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-gray-900 text-white">
      {/* Hero */}
      <div
        className="relative w-full h-[30vh] md:h-[40vh] flex justify-center items-center flex-col gap-3"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="z-[1] flex flex-col justify-center items-center gap-2 px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Contactez‑nous</h1>
          <p className="text-md md:text-lg text-gray-200">
            Nous serons ravis de vous conseiller et de vous fournir un devis
            personnalisé.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <div
          className="bg-black/40 border border-gray-1200 rounded-xl p-6 md:p-8 shadow-lg"
          data-aos="fade-right"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 font-medium mb-2">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-black/30 text-white placeholder:text-gray-400 border border-gray-1200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow"
                placeholder="Jean Dupont"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-black/30 text-white placeholder:text-gray-400 border border-gray-1200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow"
                placeholder="jean.dupont@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 font-medium mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full bg-black/30 text-white placeholder:text-gray-400 border border-gray-1200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow"
                placeholder="+33 6 12 34 56 78"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full bg-black/30 text-white placeholder:text-gray-400 border border-gray-1200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow"
                placeholder="Bonjour, je souhaite un devis pour..."
              />
            </div>

            <button
              type="submit"
              className="button-special w-full text-center py-3 rounded-md"
            >
              {isLoading ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>

        {/* Company Info + Map */}
        <div
          className="flex flex-col justify-between gap-8"
          data-aos="fade-left"
        >
          <div className="bg-black/40 border border-gray-1200 rounded-xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Nos coordonnées
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow text-lg" />
                <a
                  href="https://www.google.com/maps?q=13+Rue+Alfred+Dumont+59140+Dunkerque+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow transition"
                >
                  13 Rue Alfred Dumont 59140 Dunkerque, France
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow text-lg" />
                <a
                  href="https://wa.me/33757828337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow transition"
                >
                  +33757828337
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow text-lg" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=axelium.menuiseries@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow transition"
                >
                  axelium.menuiseries@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-1200 shadow-lg h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.158719682753!2d2.3768777!3d51.031689199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc8c62eeebd7ff%3A0xa2f67015b20993e2!2s13%20Rue%20Alfred%20Dumont%2C%2059140%20Dunkerque%2C%20France!5e0!3m2!1sen!2s!4v1760108788855!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Axelium Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
