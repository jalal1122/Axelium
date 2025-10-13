import reliableImg from "../../assets/TrustSection/reliable.png";
import fabricatonImg from "../../assets/TrustSection/fabrication.png";
import customerserviceImg from "../../assets/TrustSection/customerservice.jpg";
// import productionImg from "../../assets/TrustSection/production.png";

export default function TrustSection() {
  const trustCards = [
    {
      title: "Fabrication sur mesure",
      desc: "Chaque produit est conçu selon vos besoins et vos dimensions.",
      img: fabricatonImg,
    },
    // {
    //   title: "10 ans d'expérience en France",
    //   desc: "Une décennie d'expertise et de confiance au service de nos clients en France.",
    //   img: productionImg,
    // },
    {
      title: "Service client réactif",
      desc: "Une équipe à votre écoute pour tout accompagnement.",
      img: customerserviceImg,
    },
    {
      title: "Garantie qualité",
      desc: "Des produits durables et conformes aux normes CE.",
      img: reliableImg,
    },
  ];

  return (
    <section
      className="py-16 bg-gray-900 border-t-4 border-gray-1200"
      id="trust"
    >
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl font-bold text-white">
          Pourquoi choisir Axlium Menuiseries ?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {trustCards.map((card, i) => (
          <div
            key={i}
            className="relative group h-72 overflow-hidden cursor-pointer"
            data-aos="fade-up"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${card.img})` }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white z-10">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm opacity-90">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
