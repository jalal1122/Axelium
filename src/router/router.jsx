import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Windows from "../pages/Windows";
import Ideal from "../pages/Ideal";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/windows/:pdName" element={<Windows />} />
        <Route path="/product/IDEAL" element={<Ideal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Router;
