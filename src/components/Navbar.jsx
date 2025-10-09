import { NavLink } from "react-router";
import { FaHome } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import MegaMenu from "./Navbar/MegaMenu";
import { useState } from "react";

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col shadow-lg">
      <nav className="bg-black flex gap-5 justify-around items-center">
        {/* Nav Logo Side */}
        <div className="flex justify-center items-center gap-4 p-2">
          <img src="/logo.svg" alt="Logo" className="w-15" />
          <img
            src="/logo_text.svg"
            alt="Logo Text"
            className="relative w-30 top-1"
          />
        </div>

        {/* Nav Links Side */}
        <div className="flex gap-8 text-white text-lg font-medium">
          <NavLink to="/" className="nav-hover-link nav-link">
            <FaHome className="inline-block mr-4" size={25} />
            <span>Accueil</span>
          </NavLink>
          <NavLink
            to="/product"
            className="nav-hover-link nav-link"
            onMouseOver={() => setIsMegaMenuOpen(true)}
            onMouseOut={() => setIsMegaMenuOpen(false)}
          >
            <FaBoxOpen className="inline-block mr-4" size={25} />
            Produits
          </NavLink>
          <NavLink to="/contact" className="nav-hover-link nav-link">
            <IoMail className="inline-block mr-4" size={25} />
            Contact
          </NavLink>
        </div>

        {/* Request a Quote */}
        <div>
          <button className="button-special">Demander un devis</button>
        </div>
      </nav>

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
