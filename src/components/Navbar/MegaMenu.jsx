import { useState } from "react";
import windowsImg from "../../assets/MegaMunuImages/windows.png";
import windowsSvg from "../../assets/MegaMunuSvg/windows.svg"

const MegaMenu = () => {
  const [menuBgImage, setMenuBgImage] = useState(windowsImg);   

  return (
    <div className="mega-menu">
        {/* filer */}
        <div className="w-[50%]"></div>

      {/* Background Image */}
      {menuBgImage && (
        <img src={menuBgImage} alt="" className="" />
      )}

      {/* Content */}

      <div className="inside-mega-menu">
        <ul className="menu-line">
          <li><img src={windowsSvg} alt="" /> <span>WINDOWS</span></li>
          <li>DOORS</li>
          <li>TERRACE SYSTEMS</li>
          <li>SHUTTERS</li>
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
