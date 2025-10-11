import { Link } from "react-router";

const ShuttersMenu = () => {
  return (
    <>
      <ul className="flex flex-col gap-4">
        <li className="menu-heading">Rénovation</li>

        <li>
          <Link to="/product/shutters/Volets roulants en aluminium" className="menu-item">
            <span>Volets roulants en aluminium</span>
          </Link>
        </li>

      </ul>
      <ul className="flex flex-col gap-4">
        <li className="menu-heading">MONOBLOC</li>

        <li>
          <Link to="/product/shutters/Volets roulants en PVC" className="menu-item">
            <span>Volets roulants en PVC</span>
          </Link>
        </li>
        <li>
          <Link to="/product/shutters/Volets roulants avec caisson en polystyrène" className="menu-item">
            <span>Volets roulants avec caisson en polystyrène</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ShuttersMenu;
