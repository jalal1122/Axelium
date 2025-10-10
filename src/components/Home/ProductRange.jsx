import windowsImg from "../../assets/ProductRange/windows.png";
import doorsImg from "../../assets/ProductRange/doors.png";
import terracesystemImg from "../../assets/ProductRange/terracesystems.png";
import shuttersImg from "../../assets/ProductRange/shutters.png";

const ProductRange = () => {
  return (
    <section className="product-range">
      <h2 className="text-3xl font-bold mb-4">Gamme de produits</h2>
      <p>
        Axelium - fabricant de fenêtres, portes, volets roulants et de
        brise-soleil orientables
      </p>

      {/* Product Items */}
      <div className="products-flex">
        <div
          className="product-item"
          style={{
            backgroundImage: `url(${windowsImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="mt-6">Fenêtres</h3>
        </div>

        <div
          className="product-item"
          style={{
            backgroundImage: `url(${doorsImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="mt-6">Porte d'entrée</h3>
        </div>

        <div
          className="product-item"
          style={{
            backgroundImage: `url(${terracesystemImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="mt-6">Systèmes coulissants</h3>
        </div>

        <div
          className="product-item"
          style={{
            backgroundImage: `url(${shuttersImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="mt-6">Volets roulants</h3>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
