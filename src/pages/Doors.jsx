import { useParams } from "react-router";
import products from "../products.js";
import Hero from "../components/Products/Hero";
import Detail from "../components/Products/Detail.jsx";
import Structure from "../components/Products/Structure";

const Doors = () => {
  const { pdName } = useParams();

  const pathName = window.location.pathname.split("/")[2];

  let myProducts;

  if (pathName === "doors") {
    myProducts = products.doors;
  }

  const product = myProducts.find((p) => p.name === decodeURIComponent(pdName));

  return (
    <>
      <Hero product={product} />
      <Detail product={product} />
      <Structure product={product} />
    </>
  );
};

export default Doors;
