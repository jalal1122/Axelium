import { Route, Routes } from "react-router";
import Home from "../pages/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<div>Product Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </div>
  );
};

export default Router;
