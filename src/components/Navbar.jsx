import { NavLink, useNavigate } from "react-router";
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
import { Link } from "react-router";

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

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col shadow-lg">
      <nav className="bg-black flex gap-5 justify-around items-center">
        {/* Nav Logo Side */}
        <div className="flex justify-center items-center gap-4 p-2">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" className="w-15" />
            <img
              src="/logo_text.svg"
              alt="Logo Text"
              className="relative hidden top-1 sm:w-30"
            />
          </Link>
        </div>

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
              overflowY: "none",
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
            <Link to="/product/windows/IGLO EDGE" className="mobile-menu-item">
              <span>IGLO EDGE</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/windows/IGLO Energy"
              className="mobile-menu-item"
            >
              <span>IGLO Energy</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/windows/IGLO Energy Classic"
              className="mobile-menu-item"
            >
              <span>IGLO Energy Classic</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/windows/IGLO ENERGY ALUCOVER"
              className="mobile-menu-item"
            >
              <span>IGLO ENERGY ALUCOVER</span>
            </Link>
          </li>
          <li>
            <Link to="/product/windows/IGLO 5" className="mobile-menu-item">
              <span>IGLO 5</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/windows/IGLO 5 Classic"
              className="mobile-menu-item"
            >
              <span>IGLO 5 Classic</span>
            </Link>
          </li>
          <li>
            <Link to="/product/windows/IGLO Light" className="mobile-menu-item">
              <span>IGLO Light</span>
            </Link>
          </li>
          <li>
            <Link to="/product/windows/IGLO EXT" className="mobile-menu-item">
              <span>IGLO EXT</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/windows/IGLO PREMIER"
              className="mobile-menu-item"
            >
              <span>IGLO PREMIER</span>
            </Link>
          </li>
          <li>
            <Link to="/product/IDEAL" className="mobile-menu-item">
              <span>IDEAL</span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Fenêtres en aluminium</li>

          <li>
            <Link to="/product/windows/MB-86N SI" className="mobile-menu-item">
              <span>MB-86N SI</span>
            </Link>
          </li>
          <li>
            <Link to="/product/windows/MB-79N SI" className="mobile-menu-item">
              <span>MB-79N SI</span>
            </Link>
          </li>
          <li>
            <Link to="/product/windows/MB-70HI" className="mobile-menu-item">
              <span>MB-70HI</span>
            </Link>
          </li>
          <li>
            <Link to="/product/windows/MB-70" className="mobile-menu-item">
              <span>MB-70</span>
            </Link>
          </li>
          <li>
            <Link to="/product/windows/MB-45" className="mobile-menu-item">
              <span>MB-45</span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Fenêtres en bois</li>

          <li>
            <Link
              to="/product/windows/SOFTLINE - 68, 78, 88"
              className="mobile-menu-item"
            >
              <span>SOFTLINE - 68, 78, 88</span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">
            Fenêtres mixtes bois-aluminium
          </li>

          <li>
            <Link
              to="/product/windows/DUOLINE - 68, 78, 88"
              className="mobile-menu-item"
            >
              <span>DUOLINE - 68, 78, 88</span>
            </Link>
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
            <Link to="/product/doors/Iglo Energy" className="mobile-menu-item">
              <span>Iglo Energy</span>
            </Link>
          </li>
          <li>
            <Link to="/product/doors/Iglo 5" className="mobile-menu-item">
              <span>Iglo 5</span>
            </Link>
          </li>
          <li>
            <Link to="/product/doors/Iglo Edge" className="mobile-menu-item">
              <span>Iglo Edge</span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Portes en aluminium</li>

          <li>
            <Link to="/product/doors/D-ART Line" className="mobile-menu-item">
              <span>D-ART Line</span>
            </Link>
          </li>
          <li>
            <Link to="/product/doors/MB-86N SI" className="mobile-menu-item">
              <span>MB-86N SI</span>
            </Link>
          </li>
          <li>
            <Link to="/product/doors/MB-79N SI+" className="mobile-menu-item">
              <span>MB-79N SI+</span>
            </Link>
          </li>
          <li>
            <Link to="/product/doors/MB-70HI" className="mobile-menu-item">
              <span>MB-70HI</span>
            </Link>
          </li>
          <li>
            <Link to="/product/doors/MB-70" className="mobile-menu-item">
              <span>MB-70</span>
            </Link>
          </li>
          <li>
            <Link to="/product/doors/MB-45" className="mobile-menu-item">
              <span>MB-45</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/doors/MB-78EI Fire-Doors"
              className="mobile-menu-item"
            >
              <span>MB-78EI Fire-Doors</span>
            </Link>
          </li>
          <li>
            <Link to="/product/doors/PIVOT" className="mobile-menu-item">
              <span>PIVOT</span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Porte d'entrée en bois</li>

          <li>
            <Link
              to="/product/doors/SOFTLINE 68, 78, 88"
              className="mobile-menu-item"
            >
              <span>SOFTLINE 68, 78, 88</span>
            </Link>
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
            <Link
              to="/product/terracesystems/IGLO-HS"
              className="mobile-menu-item"
            >
              <span>IGLO-HS</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/IGLO-HS ALUCOVER"
              className="mobile-menu-item"
            >
              <span>IGLO-HS ALUCOVER</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/MB-77HS HI"
              className="mobile-menu-item"
            >
              <span>MB-77HS HI</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/MB-77HS HI MONORAIL"
              className="mobile-menu-item"
            >
              <span>MB-77HS HI MONORAIL</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/MB-59HS HI"
              className="mobile-menu-item"
            >
              <span>MB-59HS HI</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/SOFTLINE HS"
              className="mobile-menu-item"
            >
              <span>SOFTLINE HS</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/DUOLINE HS"
              className="mobile-menu-item"
            >
              <span>DUOLINE HS</span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Coulissant</li>

          <li>
            <Link
              to="/product/terracesystems/IGLO EDGE SLIDE"
              className="mobile-menu-item"
            >
              <span>IGLO EDGE SLIDE</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/IGLO SLIDE"
              className="mobile-menu-item"
            >
              <span>IGLO SLIDE</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/MB-SLIDE"
              className="mobile-menu-item"
            >
              <span>MB-SLIDE</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/COR VISION"
              className="mobile-menu-item"
            >
              <span>COR VISION</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/COR VISION PLUS"
              className="mobile-menu-item"
            >
              <span>COR VISION PLUS</span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Accordéon</li>
          <li>
            <Link
              to="/product/terracesystems/MB-86 Fold Line HD"
              className="mobile-menu-item"
            >
              <span>MB-86 Fold Line HD</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/SOFTLINE 68"
              className="mobile-menu-item"
            >
              <span>SOFTLINE 68</span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">Oscillo - coulissant PSK</li>

          <li>
            <Link
              to="/product/terracesystems/IGLO ENERGY PSK"
              className="mobile-menu-item"
            >
              <span>IGLO ENERGY PSK</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/IGLO ENERGY CLASSIC PSK"
              className="mobile-menu-item"
            >
              <span>IGLO ENERGY CLASSIC PSK</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/IGLO 5 PSK"
              className="mobile-menu-item"
            >
              <span>IGLO 5 PSK</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/IGLO 5 CLASSIC PSK"
              className="mobile-menu-item"
            >
              <span>IGLO 5 CLASSIC PSK</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/IGLO LIGHT PSK"
              className="mobile-menu-item"
            >
              <span>IGLO LIGHT PSK</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/terracesystems/MB-70 and MB-70HI PSK"
              className="mobile-menu-item"
            >
              <span>MB-70/MB-70HI PSK</span>
            </Link>
          </li>
          <>
            <Link
              to="/product/terracesystems/Softline PSK"
              className="mobile-menu-item"
            >
              <span>Softline PSK</span>
            </Link>
          </>
          <li>
            <Link
              to="/product/terracesystems/DUOLINE PSK"
              className="mobile-menu-item"
            >
              <span>DUOLINE PSK</span>
            </Link>
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
            <Link
              to="/product/shutters/Volets roulants en aluminium"
              className="mobile-menu-item"
            >
              <span>Volets roulants en aluminium</span>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="mobile-menu-heading">MONOBLOC</li>

          <li>
            <Link
              to="/product/shutters/Volets roulants en PVC"
              className="mobile-menu-item"
            >
              <span>Volets roulants en PVC</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/shutters/Volets roulants avec caisson en polystyrène"
              className="mobile-menu-item"
            >
              <span>Volets roulants avec caisson en polystyrène</span>
            </Link>
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
