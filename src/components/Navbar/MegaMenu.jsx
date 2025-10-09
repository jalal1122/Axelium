import { useState } from "react";
import windowsImg from "../../assets/MegaMunuImages/windows.png";
import windowsSvg from "../../assets/MegaMunuSvg/windows.svg";
import doorsSvg from "../../assets/MegaMunuSvg/doors.svg";
import terraceSystemsSvg from "../../assets/MegaMunuSvg/terracesystem.svg";
import shuttersSvg from "../../assets/MegaMunuSvg/shutters.svg";
import WindowsMenu from "./WindowsMenu";
import DoorsMenu from "./DoorsMenu";
import TerraceSystemsMenu from "./TerraceSystemsMenu";
import ShuttersMenu from "./ShuttersMenu";

const MegaMenu = () => {
  const [menuBgImage, setMenuBgImage] = useState(windowsImg);

  const [activeCategory, setActiveCategory] = useState("windows");

  return (
    <div className="mega-menu">
      {/* filer */}
      <div className="w-[50%]"></div>

      {/* Background Image */}
      {menuBgImage && <img src={menuBgImage} alt="" className="" />}

      {/* Content */}

      <div className="inside-mega-menu">
        <ul className="menu-line">
          <li
            className="menu-item-right"
            onMouseOver={() => {
              setMenuBgImage(windowsImg);
              setActiveCategory("windows");
              console.log(activeCategory);
            }}
          >
            <img src={windowsSvg} alt="" className="menu-icon" />{" "}
            <span>WINDOWS</span>
          </li>
          <li
            className="menu-item-right"
            onMouseOver={() => {
            //   setMenuBgImage(null);
              setActiveCategory("doors");
              console.log(activeCategory);
            }}
          >
            <img src={doorsSvg} alt="" className="menu-icon" />{" "}
            <span>DOORS</span>
          </li>
          <li
            className="menu-item-right"
            onMouseOver={() => {
            //   setMenuBgImage(null);
              setActiveCategory("terrace systems");
              console.log(activeCategory);
            }}
          >
            <img src={terraceSystemsSvg} alt="" className="menu-icon" />{" "}
            <span>TERRACE SYSTEMS</span>
          </li>
          <li
            className="menu-item-right"
            onMouseOver={() => {
            //   setMenuBgImage(null);
              setActiveCategory("shutters");
              console.log(activeCategory);
            }}
          >
            <img src={shuttersSvg} alt="" className="menu-icon" />{" "}
            <span>SHUTTERS</span>
          </li>
        </ul>

        {activeCategory === "windows" && <WindowsMenu />}
        {activeCategory === "doors" && <DoorsMenu />}
        {activeCategory === "terrace systems" && <TerraceSystemsMenu />}
        {activeCategory === "shutters" && <ShuttersMenu />}
      </div>
    </div>
  );
};

export default MegaMenu;
