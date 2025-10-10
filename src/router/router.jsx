import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={
            <div>
              <h1>Product Page</h1>
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Router;
