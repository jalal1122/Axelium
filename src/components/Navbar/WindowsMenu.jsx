import { Link } from "react-router";

const WindowsMenu = () => {
  return (
    <>
      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Fenêtres PVC</li>

        <li>
          <Link to="/product/windows/IGLO EDGE" className="menu-item">
            <span>IGLO EDGE</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/IGLO Energy" className="menu-item">
            <span>IGLO Energy</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/IGLO Energy Classic" className="menu-item">
            <span>IGLO Energy Classic</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/IGLO ENERGY ALUCOVER" className="menu-item">
            <span>IGLO ENERGY ALUCOVER</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/IGLO 5" className="menu-item">
            <span>IGLO 5</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/IGLO 5 Classic" className="menu-item">
            <span>IGLO 5 Classic</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/IGLO Light" className="menu-item">
            <span>IGLO Light</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/IGLO EXT" className="menu-item">
            <span>IGLO EXT</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/IGLO PREMIER" className="menu-item">
            <span>IGLO PREMIER</span>
          </Link>
        </li>
        <li>
          <Link to="/product/IDEAL" className="menu-item">
            <span>IDEAL</span>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Fenêtres en aluminium</li>

        <li>
          <Link to="/product/windows/MB-86N SI" className="menu-item">
            <span>MB-86N SI</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/MB-79N SI" className="menu-item">
            <span>MB-79N SI</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/MB-70HI" className="menu-item">
            <span>MB-70HI</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/MB-70" className="menu-item">
            <span>MB-70</span>
          </Link>
        </li>
        <li>
          <Link to="/product/windows/MB-45" className="menu-item">
            <span>MB-45</span>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Fenêtres en bois</li>

        <li>
          <Link to="/product/windows/SOFTLINE - 68, 78, 88" className="menu-item">
            <span>SOFTLINE - 68, 78, 88</span>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Fenêtres mixtes bois-aluminium</li>

        <li>
          <Link to="/product/windows/DUOLINE - 68, 78, 88" className="menu-item">
            <span>DUOLINE - 68, 78, 88</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default WindowsMenu;
