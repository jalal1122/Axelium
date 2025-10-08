import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-black p-4 flex gap-5 justify-around items-center">
        {/* Nav Logo Side */}
        <div className="flex justify-center items-center gap-4">
          <img src="./logo.svg" alt="Logo" className="w-15" />
          <img
            src="./logo_text.svg"
            alt="Logo Text"
            className="relative w-30 top-1"
          />
        </div>

        {/* Nav Divider */}
        {/* <div className='w-[1px] h-10 bg-white/40'></div> */}

        {/* Nav Links Side */}
        <div className="flex gap-8 text-white text-lg font-medium">
          <NavLink
            to="/"
            className="nav-hover-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="nav-hover-link"
          >

            
            Products
          </NavLink>
          <NavLink
            to="/about"
            className="nav-hover-link"
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
