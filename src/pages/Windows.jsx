import { useParams } from "react-router";
import products from "../products.js";
import Hero from "../components/Products/Hero";
import Detail from "../components/Products/Detail.jsx";
import Structure from "../components/Products/Structure";

const Windows = () => {
  const { pdName } = useParams();

  const product = products.find((p) => p.name === decodeURIComponent(pdName));

  return (
    <>
      <Hero product={product} />
      <Detail product={product} />
      <Structure product={product} />
    </>
  );
};

export default Windows;
