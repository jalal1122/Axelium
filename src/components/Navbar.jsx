import { NavLink, useNavigate, Link } from "react-router";
import { FaHome, FaBars } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import MegaMenu from "./Navbar/MegaMenu";
import { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import windowsSvg from "../assets/MegaMunuSvg/windows.svg";
import doorsSvg from "../assets/MegaMunuSvg/doors.svg";
import terraceSystemsSvg from "../assets/MegaMunuSvg/terracesystem.svg";
import shuttersSvg from "../assets/MegaMunuSvg/shutters.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const [isMobileMegaMenuOpen, setIsMobileMegaMenuOpen] = useState(false);

  const windowsMenuRef = useRef(null);

  const doorsMenuRef = useRef(null);

  const terraceSystemsMenuRef = useRef(null);

  const shuttersMenuRef = useRef(null);

  const mobileMegaMenu = useRef(null);

  const mobileMenuRef = useRef(null);

  gsap.registerPlugin(useGSAP);

  const closeMenus = (tabRef) => {
    gsap.to(tabRef.current, {
      x: "100%",
      duration: 0.3,
      overflowY: "hidden",
    });

    gsap.to(mobileMegaMenu.current, {
      x: "100%",
      duration: 0.3,
      delay: 0.3,
      overflowY: "hidden",
    });

    gsap.to(mobileMenuRef.current, {
      x: "100%",
      duration: 0.2,
      delay: 0.5,
      overflowY: "auto",
    });
  };

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col shadow-lg">
      <nav className="bg-black flex gap-5 justify-around items-center">
        {/* Nav Logo Side */}
        <Link to="/">
          <div className="flex justify-center items-center gap-4 p-2">
            <img src="/logo.svg" alt="Logo" className="w-15" />
            <img
              src="/logo_text.svg"
              alt="Logo Text"
              className="relative hidden top-1 sm:w-30 sm:inline-block"
            />
          </div>
        </Link>

        {/* Nav Links Side */}
        <div className="hidden lg:flex gap-8 text-white text-lg font-medium ">
          <NavLink to="/" className="nav-hover-link nav-link">
            <FaHome className="inline-block mr-4" size={25} />
            <span>Accueil</span>
          </NavLink>
          <div
            className="nav-hover-link nav-link"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <FaBoxOpen className="inline-block mr-4" size={25} />
            Produits
          </div>
          <NavLink to="/contact" className="nav-hover-link nav-link">
            <IoMail className="inline-block mr-4" size={25} />
            Contact
          </NavLink>
        </div>

        {/* Request a Quote */}
        <div>
          <button
            onClick={() => navigate("/contact")}
            className="button-special text-sm md:text-md"
          >
            Demander un devis
          </button>
        </div>

        {/* Burger Menu */}
        <div
          className="burger-menu"
          onClick={() => {
            gsap.to(mobileMenuRef.current, {
              x: 0,
              duration: 0.5,
              overflowY: "hidden",
            });
          }}
        >
          <FaBars className="text-white" size={30} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 bg-black w-[100vw] sm:w-[60vw] md:w-[40vw] h-[100vh] transform translate-x-full z-40 "
      >
        {/* close button */}
        <div
          className="absolute top-4 right-4 text-4xl text-white cursor-pointer"
          onClick={() => {
            gsap.to(mobileMenuRef.current, {
              x: "100%",
              duration: 0.5,
              overflowY: "auto",
            });
          }}
        >
          &times;
        </div>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col gap-8 text-white text-lg font-medium p-10 mt-10">
          <li>
            <NavLink to="/" className="nav-hover-link nav-link">
              <FaHome className="inline-block mr-4" size={25} />
              Accueil
            </NavLink>
          </li>
          <li>
            <div
              className="nav-hover-link nav-link hover:cursor-pointer"
              onClick={() => {
                setIsMobileMegaMenuOpen(!isMobileMegaMenuOpen);
                gsap.to(mobileMegaMenu.current, {
                  x: 0,
                  duration: 0.5,
                  overflowY: "auto",
                });
              }}
            >
              <FaBoxOpen className="inline-block mr-4" size={25} />
              Produits
            </div>
          </li>
          <li>
            <NavLink to="/contact" className="nav-hover-link nav-link">
              <IoMail className="inline-block mr-4" size={25} />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Mega Menu */}
      <div ref={mobileMegaMenu} className="mobile-menu-tabs z-100">
        {/* close button */}
        <div
          className="absolute top-4 right-4 text-4xl text-white cursor-pointer"
          onClick={() => {
            gsap.to(mobileMegaMenu.current, {
              x: "100%",
              duration: 0.5,
              overflowY: "hidden",
            });
          }}
        >
          &times;
        </div>

        {/* Mobile Mega Menu Content */}
        <ul className="flex flex-col gap-8 text-white text-lg font-medium p-10 mt-10">
          <li
            className="menu-item-right"
            onClick={() => {
              gsap.to(windowsMenuRef.current, {
                x: 0,
                duration: 0.5,
                overflowY: "auto",
              });
            }}
          >
            <img src={windowsSvg} alt="" className="menu-icon" />{" "}
            <span className="mobile-menu-item-class">Fenêtres</span>
          </li>
          <li
            className="menu-item-right"
            onClick={() => {
              gsap.to(doorsMenuRef.current, {
                x: 0,
                duration: 0.5,
                overflowY: "auto",
              });
            }}
          >
            <img src={doorsSvg} alt="" className="menu-icon" />{" "}
            <span className="mobile-menu-item-class">Porte d'entrée</span>
          </li>
          <li
            className="menu-item-right"
            onClick={() => {
              gsap.to(terraceSystemsMenuRef.current, {
                x: 0,
                duration: 0.5,
                overflowY: "auto",
              });
            }}
          >
            <img src={terraceSystemsSvg} alt="" className="menu-icon" />{" "}
            <span className="mobile-menu-item-class">Systèmes coulissants</span>
          </li>
          <li
            className="menu-item-right"
            onClick={() => {
              gsap.to(shuttersMenuRef.current, {
                x: 0,
                duration: 0.5,
                overflowY: "auto",
              });
            }}
          >
            <img src={shuttersSvg} alt="" className="menu-icon" />{" "}
            <span className="mobile-menu-item-class">Volets roulants</span>
          </li>
        </ul>
      </div>

      {/* Windows Menu */}
      <div
        ref={windowsMenuRef}
        className="mobile-menu-tabs z-101 !overflow-y-auto custom-scrollbar p-3"
      >
        {/* close button */}
        <div
          className="absolute top-4 right-4 text-4xl text-white cursor-pointer"
          onClick={() => {
            gsap.to(windowsMenuRef.current, {
              x: "100%",
              duration: 0.5,
              overflowY: "hidden",
            });
          }}
        >
          &times;
        </div>

        {/* Windows Menu Content */}

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading !mt-13">Fenêtres PVC</li>

          <li>
            <button
              onClick={() => {
                navigate("/product/windows/IGLO EDGE");
                closeMenus(windowsMenuRef);
              }}
              // to="/product/windows/IGLO EDGE"
              className="mobile-menu-item"
            >
              <span>IGLO EDGE</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/IGLO Energy");
                closeMenus(windowsMenuRef);
              }}
              // to="/product/windows/IGLO Energy"
              className="mobile-menu-item"
            >
              <span>IGLO Energy</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/IGLO Energy Classic");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO Energy Classic</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/IGLO ENERGY ALUCOVER");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO ENERGY ALUCOVER</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/IGLO 5");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO 5</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/IGLO 5 Classic");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO 5 Classic</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/IGLO Light");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO Light</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/IGLO EXT");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO EXT</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/IGLO PREMIER");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO PREMIER</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/IDEAL");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IDEAL</span>
            </button>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Fenêtres en aluminium</li>

          <li>
            <button
              onClick={() => {
                navigate("/product/windows/MB-86N SI");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-86N SI</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/MB-79N SI");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-79N SI</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/MB-70HI");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-70HI</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/MB-70");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-70</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/windows/MB-45");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-45</span>
            </button>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Fenêtres en bois</li>

          <li>
            <button
              onClick={() => {
                navigate("/product/windows/SOFTLINE - 68, 78, 88");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>SOFTLINE - 68, 78, 88</span>
            </button>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">
            Fenêtres mixtes bois-aluminium
          </li>

          <li>
            <button
              onClick={() => {
                navigate("/product/windows/DUOLINE - 68, 78, 88");
                closeMenus(windowsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>DUOLINE - 68, 78, 88</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Doors Menu */}
      <div
        ref={doorsMenuRef}
        className="mobile-menu-tabs z-101 !overflow-y-auto custom-scrollbar p-3"
      >
        {/* close button */}
        <div
          className="absolute top-4 right-4 text-4xl text-white cursor-pointer"
          onClick={() => {
            gsap.to(doorsMenuRef.current, {
              x: "100%",
              duration: 0.5,
              overflowY: "hidden",
            });
          }}
        >
          &times;
        </div>

        {/* Doors Menu Content */}
        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Porte d'entrée en PVC</li>

          <li>
            <button
              onClick={() => {
                navigate("/product/doors/Iglo Energy");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>Iglo Energy</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/doors/Iglo 5");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>Iglo 5</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/doors/Iglo Edge");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>Iglo Edge</span>
            </button>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Portes en aluminium</li>

          <li>
            <button
              onClick={() => {
                navigate("/product/doors/D-ART Line");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>D-ART Line</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/doors/MB-86N SI");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-86N SI</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/doors/MB-79N SI+");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-79N SI+</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/doors/MB-70HI");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-70HI</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/doors/MB-70");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-70</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/doors/MB-45");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-45</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/doors/MB-78EI Fire-Doors");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-78EI Fire-Doors</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/doors/PIVOT");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>PIVOT</span>
            </button>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Porte d'entrée en bois</li>

          <li>
            <button
              onClick={() => {
                navigate("/product/doors/SOFTLINE 68, 78, 88");
                closeMenus(doorsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>SOFTLINE 68, 78, 88</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Terrace Systems Menu */}
      <div
        ref={terraceSystemsMenuRef}
        className="mobile-menu-tabs z-101 !overflow-y-auto custom-scrollbar p-3"
      >
        {/* close button */}
        <div
          className="absolute top-4 right-4 text-4xl text-white cursor-pointer"
          onClick={() => {
            gsap.to(terraceSystemsMenuRef.current, {
              x: "100%",
              duration: 0.5,
              overflowY: "hidden",
            });
          }}
        >
          &times;
        </div>

        {/* Terrace Systems Menu Content */}

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Levant coulissant HS</li>

          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/IGLO-HS");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO-HS</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/IGLO-HS ALUCOVER");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO-HS ALUCOVER</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/MB-77HS HI");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-77HS HI</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/MB-77HS HI MONORAIL");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-77HS HI MONORAIL</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/MB-59HS HI");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-59HS HI</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/SOFTLINE HS");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>SOFTLINE HS</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/DUOLINE HS");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>DUOLINE HS</span>
            </button>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Coulissant</li>

          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/IGLO EDGE SLIDE");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO EDGE SLIDE</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/IGLO SLIDE");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO SLIDE</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/MB-SLIDE");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-SLIDE</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/COR VISION");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>COR VISION</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/COR VISION PLUS");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>COR VISION PLUS</span>
            </button>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Accordéon</li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/MB-86 Fold Line HD");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-86 Fold Line HD</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/SOFTLINE 68");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>SOFTLINE 68</span>
            </button>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Oscillo - coulissant PSK</li>

          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/IGLO ENERGY PSK");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO ENERGY PSK</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/IGLO ENERGY CLASSIC PSK");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO ENERGY CLASSIC PSK</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/IGLO 5 PSK");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO 5 PSK</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/IGLO 5 CLASSIC PSK");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO 5 CLASSIC PSK</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/IGLO LIGHT PSK");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>IGLO LIGHT PSK</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/MB-70 and MB-70HI PSK");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>MB-70/MB-70HI PSK</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/Softline PSK");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>Softline PSK</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product/terracesystems/DUOLINE PSK");
                closeMenus(terraceSystemsMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>DUOLINE PSK</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Shutters Menu */}
      <div
        ref={shuttersMenuRef}
        className="mobile-menu-tabs z-101 !overflow-y-auto custom-scrollbar p-3"
      >
        {/* close button */}
        <div
          className="absolute top-4 right-4 text-4xl text-white cursor-pointer"
          onClick={() => {
            gsap.to(shuttersMenuRef.current, {
              x: "100%",
              duration: 0.5,
              overflowY: "hidden",
            });
          }}
        >
          &times;
        </div>

        {/* Shutters Menu Content */}

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Rénovation</li>

          <li>
            <button
              onClick={() => {
                navigate("/product/shutters/Volets roulants en aluminium");
                closeMenus(shuttersMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>Volets roulants en aluminium</span>
            </button>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">MONOBLOC</li>

          <li>
            <button
              onClick={() => {
                navigate("/product/shutters/Volets roulants en PVC");
                closeMenus(shuttersMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>Volets roulants en PVC</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate(
                  "/product/shutters/Volets roulants avec caisson en polystyrène"
                );
                closeMenus(shuttersMenuRef);
              }}
              className="mobile-menu-item"
              type="button"
            >
              <span>Volets roulants avec caisson en polystyrène</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Mega Menu */}
      <div
        onMouseOver={() => setIsMegaMenuOpen(true)}
        onMouseOut={() => setIsMegaMenuOpen(false)}
      >
        {isMegaMenuOpen && <MegaMenu />}
      </div>
    </header>
  );
};

export default Navbar;
