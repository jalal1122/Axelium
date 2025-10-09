import { Link } from "react-router";

const WindowsMenu = () => {
  return (
    <>
      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Fenêtres PVC</li>

        <li>
          <Link to="" className="menu-item">
            <span>IGLO EDGE</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>IGLO ENERGY</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>IGLO ENERGY CLASSIC</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>IGLO ENERGY ALUCOVER</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>IGLO 5</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>IGLO 5 CLASSIC</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>IGLO LIGHT</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>IGLO EXT</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>IGLO PREMIER</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>IDEAL</span>
          </Link>
        </li>
      </ul>


      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Fenêtres en aluminium</li>

        <li>
          <Link to="" className="menu-item">
            <span>MB-86N SI</span>
          </Link>
        </li>
        <li>
          <Link to="" className="menu-item">
            <span>MB-79N SI</span>
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
      </ul>


      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Fenêtres en bois</li>

        <li>
          <Link to="" className="menu-item">
            <span>SOFTLINE - 68, 78, 88</span>
          </Link>
        </li>
      </ul>


      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Fenêtres mixtes bois-aluminium</li>

        <li>
          <Link to="" className="menu-item">
            <span>DUOLINE - 68, 78, 88</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default WindowsMenu;
