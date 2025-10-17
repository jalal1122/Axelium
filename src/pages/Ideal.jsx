import { useNavigate, useLocation } from "react-router";
import SEO from "../components/SEO";
import idealheroImg from "../assets/Products/Windows/IDEAL/hero.png";
import p1 from "../assets/Products/Windows/IDEAL/p1.png";
import p2 from "../assets/Products/Windows/IDEAL/p2.png";
import p3 from "../assets/Products/Windows/IDEAL/p3.png";
import p4 from "../assets/Products/Windows/IDEAL/p4.png";
import p5 from "../assets/Products/Windows/IDEAL/p5.png";
import p6 from "../assets/Products/Windows/IDEAL/p6.png";

const Ideal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const products = [
    {
      img: p1,
      alt: "Product 1",
      title: "IDEAL NEO AD",
      specs: [
        "dB = 36 Sound insulation",
        "Uw = 0,79 W/(m²K)* THERMAL TRANSMITTANCE",
        "6 NUMBER OF CHAMBERS",
        "76 mm INSTALLATION DEPTH",
        "2 GASKETS",
        "24-54 mm Glass packages",
      ],
    },
    {
      img: p2,
      alt: "Product 2",
      title: "IDEAL NEO MD",
      specs: [
        "dB = 36 Sound insulation",
        "Uw = 0,76 W/(m²K)* THERMAL TRANSMITTANCE",
        "6 NUMBER OF CHAMBERS",
        "76 mm INSTALLATION DEPTH",
        "24-54 mm Glass packages",
        "3 Seals",
      ],
    },
    {
      img: p3,
      alt: "Product 3",
      title: "IDEAL NEO MD-FS",
      specs: [
        "dB = 36 Sound insulation",
        "Uw = 0,73 W/(m²K)* THERMAL TRANSMITTANCE",
        "6 NUMBER OF CHAMBERS",
        "76 mm INSTALLATION DEPTH",
        "3 GASKETS",
        "36-68 mm Glass packages",
      ],
    },
    {
      img: p4,
      alt: "Product 4",
      title: "IDEAL NEO MD MONOBLOCK",
      specs: [
        "dB = 36 Sound insulation",
        "Uw = 0,76 W/(m²K)* THERMAL TRANSMITTANCE",
        "6 NUMBER OF CHAMBERS",
        "76 mm / 122 mm / 142 mm / 162 mm INSTALLATION DEPTH",
        "3 GASKETS",
        "24-52 mm Glass packages",
      ],
    },
    {
      img: p5,
      alt: "Product 5",
      title: "IDEAL NEO MD RENOVATION",
      specs: [
        "dB = 36 Sound insulation",
        "Uw = 0,76 W/(m²K)* THERMAL TRANSMITTANCE",
        "5/6 NUMBER OF CHAMBERS",
        "76 mm INSTALLATION DEPTH",
        "3 GASKETS",
        "24-52 mm Glass packages",
      ],
    },
    {
      img: p6,
      alt: "Product 6",
      title: "IDEAL 7000 NL",
      specs: [
        "dB = 36 Sound insulation",
        "Uw = 0,82 W/(m²K)* THERMAL TRANSMITTANCE",
        "5 NUMBER OF CHAMBERS",
        "120 mm INSTALLATION DEPTH",
        "2 GASKETS",
        "24-54 mm Glass packages",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="IDEAL | Lignes PVC | Axelium Menuiseries"
        description="Découvrez la gamme IDEAL: IDEAL NEO AD, MD, MD-FS, Monoblock, Rénovation et 7000 NL. Performances thermiques et acoustiques de haut niveau."
        canonical={`https://axelium.eu${location.pathname}`}
      />
      <section
        className="relative w-full h-[50vh] flex flex-col gap-5 p-4 justify-center items-center"
        style={{
          backgroundImage: `url(${idealheroImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 h-full w-full bg-black/50"></div>

        <h1 className="text-5xl text-white font-bold z-2">
          IDEAL Product Line
        </h1>
        <p className="text-3xl text-white z-2">Quality that impresses</p>
      </section>

      <section>
        <div className="flex flex-wrap gap-5 justify-center items-start p-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-[320px] h-[700px] flex flex-col gap-5 justify-between items-center shadow-lg p-4 hover:scale-101 hover:shadow-2xl transition-transform"
            >
              <img
                src={product.img}
                alt={product.alt}
                className="w-100 object-cover"
              />
              <h2 className="text-xl font-bold mb-3">{product.title}</h2>
              <ul className="list-none pl-5 flex flex-col gap-3 justify-center items-center">
                {product.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/product/windows/" + product.title)}
                className="button-special px-8 py-2 font-bold"
              >
                More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ideal;
