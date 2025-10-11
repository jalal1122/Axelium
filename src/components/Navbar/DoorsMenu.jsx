import { Link } from "react-router";

const DoorsMenu = () => {
  return (
    <>
      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Porte d'entrée en PVC</li>

        <li>
          <Link to="/product/doors/Iglo Energy" className="menu-item">
            <span>Iglo Energy</span>
          </Link>
        </li>
        <li>
          <Link to="/product/doors/Iglo 5" className="menu-item">
            <span>Iglo 5</span>
          </Link>
        </li>
        <li>
          <Link to="/product/doors/Iglo Edge" className="menu-item">
            <span>Iglo Edge</span>
          </Link>
        </li>
        
      </ul>


      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Portes en aluminium</li>

        <li>
          <Link to="/product/doors/D-ART Line" className="menu-item">
            <span>D-ART Line</span>
          </Link>
        </li>
        <li>
          <Link to="/product/doors/MB-86N SI" className="menu-item">
            <span>MB-86N SI</span>
          </Link>
        </li>
        <li>
          <Link to="/product/doors/MB-79N SI+" className="menu-item">
            <span>MB-79N SI+</span>
          </Link>
        </li>
        <li>
          <Link to="/product/doors/MB-70HI" className="menu-item">
            <span>MB-70HI</span>
          </Link>
        </li>
        <li>
          <Link to="/product/doors/MB-70" className="menu-item">
            <span>MB-70</span>
          </Link>
        </li>
        <li>
          <Link to="/product/doors/MB-45" className="menu-item">
            <span>MB-45</span>
          </Link>
        </li>
        <li>
          <Link to="/product/doors/MB-78EI Fire-Doors" className="menu-item">
            <span>MB-78EI Fire-Doors</span>
          </Link>
        </li>
        <li>
          <Link to="/product/doors/PIVOT" className="menu-item">
            <span>PIVOT</span>
          </Link>
        </li>
      </ul>


      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Porte d'entrée en bois</li>

        <li>
          <Link to="/product/doors/SOFTLINE 68, 78, 88" className="menu-item">
            <span>SOFTLINE 68, 78, 88</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default DoorsMenu;
