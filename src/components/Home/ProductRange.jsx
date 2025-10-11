import windowsImg from "../../assets/ProductRange/windows.png";
import doorsImg from "../../assets/ProductRange/doors.png";
import terracesystemImg from "../../assets/ProductRange/terracesystems.png";
import shuttersImg from "../../assets/ProductRange/shutters.png";
import { useRef, useState } from "react";
import windowsbgImg from "../../assets/ProductRange/windowsbg.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import products from "./productDetails.js";
import doorsbgImg from "../../assets/ProductRange/doorsbg.png";
import terracesystembgImg from "../../assets/ProductRange/terracesystemsbg.png";
import shuttersbgImg from "../../assets/ProductRange/shuttersbg.png";
import { Link } from "react-router";

const ProductRange = () => {
  gsap.registerPlugin(useGSAP);

  const [windowsBgImg, setWindowsBgImg] = useState(windowsbgImg);

  const [currentCategory, setCurrentCategory] = useState(null);

  const productDetailsRef = useRef(null);
  const productImageRef = useRef(null);

  return (
    <section className="product-range relative">
      <h2 className="text-3xl font-bold mb-4">Gamme de produits</h2>
      <p>
        Axelium - fabricant de fenêtres, portes, volets roulants et de
        brise-soleil orientables
      </p>

      {/* Product Items */}
      <div className="products-flex">
        <button
          onClick={() => {
            gsap.to(productDetailsRef.current, {
              width: "30vw",
              duration: 0.5,
              display: "block",
            });
            gsap.to(productImageRef.current, {
              width: "70vw",
              duration: 0.5,
              display: "block",
            });
            setWindowsBgImg(windowsbgImg);
            setCurrentCategory(products[0]);
          }}
        >
          <div
            className="product-item"
            style={{
              backgroundImage: `url(${windowsImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="mt-6">Fenêtres</h3>
          </div>
        </button>

        <button
          onClick={() => {
            gsap.to(productDetailsRef.current, {
              width: "30vw",
              duration: 0.5,
              display: "block",
            });
            gsap.to(productImageRef.current, {
              width: "70vw",
              duration: 0.5,
              display: "block",
            });
            setWindowsBgImg(doorsbgImg);
            setCurrentCategory(products[1]);
          }}
        >
          <div
            className="product-item"
            style={{
              backgroundImage: `url(${doorsImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="mt-6">Porte d'entrée</h3>
          </div>
        </button>

        <button
          onClick={() => {
            gsap.to(productDetailsRef.current, {
              width: "30vw",
              duration: 0.5,
              display: "block",
            });
            gsap.to(productImageRef.current, {
              width: "70vw",
              duration: 0.5,
              display: "block",
            });
            setWindowsBgImg(terracesystembgImg);
            setCurrentCategory(products[2]);
          }}
        >
          <div
            className="product-item"
            style={{
              backgroundImage: `url(${terracesystemImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="mt-6">Systèmes coulissants</h3>
          </div>
        </button>

        <button
          onClick={() => {
            gsap.to(productDetailsRef.current, {
              width: "30vw",
              duration: 0.5,
              display: "block",
            });
            gsap.to(productImageRef.current, {
              width: "70vw",
              duration: 0.5,
              display: "block",
            });
            setWindowsBgImg(shuttersbgImg);
            setCurrentCategory(products[3]);
          }}
        >
          <div
            className="product-item"
            style={{
              backgroundImage: `url(${shuttersImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="mt-6">Volets roulants</h3>
          </div>
        </button>
      </div>

      {/* Products Details */}
      <div ref={productDetailsRef} className="product-details-menu">
        <div
          className="special-gradient w-full h-full absolute
          top-0 left-0 z-10"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              gsap.to(productDetailsRef.current, {
                width: 0,
                duration: 0.5,
                display: "none",
              });
              gsap.to(productImageRef.current, {
                width: 0,
                duration: 0.5,
                display: "none",
              });
            }}
            className="button-special !px-8 !py-2 absolute top-5 left-5"
          >
            Retour
          </button>

          <div className="relative z-20 p-8 h-[90%] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 flex flex-col gap-4 !items-end justify-center">
              {currentCategory?.details?.map((detail) => {
                return (
                  <div>
                    <h3 className="mb-2 border-b-3 border-gray-1200 p-2 text-right">
                      {detail?.category}
                    </h3>
                    <div className="text-sm flex flex-col gap-4 items-end justify-center">
                      {detail?.items.map((item) => {
                        return <Link to={item === "IDEAL" ? `/product/IDEAL` : `/product/windows/${item}`} className="mb-1 hover:text-yellow text-right">{item}</Link>;
                      })}
                    </div>
                  </div>
                );
              })}
            </h2>

            <div className="flex flex-col gap-5"></div>
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div
        ref={productImageRef}
        className="absolute top-0 right-0 hidden h-full bg-gray-200"
      >
        <img
          src={windowsBgImg}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ProductRange;
