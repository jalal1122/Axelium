import { Link } from "react-router";

const TerraceSystemsMenu = () => {
  return (
    <>
      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Levant coulissant HS</li>

        <li>
          <Link to="/product/terracesystems/IGLO-HS" className="menu-item">
            <span>IGLO-HS</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/IGLO-HS ALUCOVER" className="menu-item">
            <span>IGLO-HS ALUCOVER</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/MB-77HS HI" className="menu-item">
            <span>MB-77HS HI</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/MB-77HS HI MONORAIL" className="menu-item">
            <span>MB-77HS HI MONORAIL</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/MB-59HS HI" className="menu-item">
            <span>MB-59HS HI</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/SOFTLINE HS" className="menu-item">
            <span>SOFTLINE HS</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/DUOLINE HS" className="menu-item">
            <span>DUOLINE HS</span>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Coulissant</li>

        <li>
          <Link to="/product/terracesystems/IGLO EDGE SLIDE" className="menu-item">
            <span>IGLO EDGE SLIDE</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/IGLO SLIDE" className="menu-item">
            <span>IGLO SLIDE</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/MB-SLIDE" className="menu-item">
            <span>MB-SLIDE</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/COR VISION" className="menu-item">
            <span>COR VISION</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/COR VISION PLUS" className="menu-item">
            <span>COR VISION PLUS</span>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Accordéon</li>
        <li>
          <Link to="/product/terracesystems/MB-86 Fold Line HD" className="menu-item">
            <span>MB-86 Fold Line HD</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/SOFTLINE 68" className="menu-item">
            <span>SOFTLINE 68</span>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Oscillo - coulissant PSK</li>

        <li>
          <Link to="/product/terracesystems/IGLO ENERGY PSK" className="menu-item">
            <span>IGLO ENERGY PSK</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/IGLO ENERGY CLASSIC PSK" className="menu-item">
            <span>IGLO ENERGY CLASSIC PSK</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/IGLO 5 PSK" className="menu-item">
            <span>IGLO 5 PSK</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/IGLO 5 CLASSIC PSK" className="menu-item">
            <span>IGLO 5 CLASSIC PSK</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/IGLO LIGHT PSK" className="menu-item">
            <span>IGLO LIGHT PSK</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/MB-70 and MB-70HI PSK" className="menu-item">
            <span>MB-70/MB-70HI PSK</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/Softline PSK" className="menu-item">
            <span>Softline PSK</span>
          </Link>
        </li>
        <li>
          <Link to="/product/terracesystems/DUOLINE PSK" className="menu-item">
            <span>DUOLINE PSK</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default TerraceSystemsMenu;
