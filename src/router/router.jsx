import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/product" element={<div>Product Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </div>
  );
};

export default Router;
