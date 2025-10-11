import { useParams } from "react-router";
import products from "../products.js";
import Hero from "../components/Products/Hero";
import Detail from "../components/Products/Detail.jsx";

const Windows = () => {
  const { pdName } = useParams();

  const product = products.find((p) => p.name === decodeURIComponent(pdName));

  console.log(product);

  return (
    <>
      <Hero product={product} />
      <Detail product={product} />
    </>
  );
};

export default Windows;
