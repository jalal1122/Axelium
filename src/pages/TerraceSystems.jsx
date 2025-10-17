import { useParams, useLocation } from "react-router";
import products from "../products.js";
import Hero from "../components/Products/Hero";
import Detail from "../components/Products/Detail.jsx";
import Structure from "../components/Products/Structure";
import SEO from "../components/SEO";

const TerraceSystems = () => {
  const { pdName } = useParams();
  const location = useLocation();

  const pathName = window.location.pathname.split("/")[2];

  let myProducts;

  if (pathName === "terracesystems") {
    myProducts = products.terraceSystems;
  }

  const product = myProducts.find((p) => p.name === decodeURIComponent(pdName));

  return (
    <>
      <SEO
        title={`${product?.name} | Axelium Menuiseries`}
        description={product?.detailSection?.description?.slice(0, 155)}
        canonical={`https://axelium.eu${location.pathname}`}
        type="product"
      />
      <Hero product={product} />
      <Detail product={product} />
      <Structure product={product} />
    </>
  );
};

export default TerraceSystems;
