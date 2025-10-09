import { Link } from "react-router";

const DoorsMenu = () => {
  return (
    <>
      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Porte d'entrée en PVC</li>

        <li>
          <Link to="" className="menu-item">
            <span>IGLO ENERGY</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>IGLO 5</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>IGLO EDGE</span>
          </Link>
        </li>
        
      </ul>


      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Portes en aluminium</li>

        <li>
          <Link to="" className="menu-item">
            <span>D-ART Line</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>MB-86N SI</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>MB-79N SI+</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>MB-70HI</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>MB-70</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>MB-45</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>MB-78EI Fire-Doors</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>PIVOT</span>
          </Link>
        </li>
      </ul>


      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Porte d'entrée en bois</li>

        <li>
          <Link to="" className="menu-item">
            <span>SOFTLINE 68, 78, 88</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default DoorsMenu;
