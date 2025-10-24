import React from "react";

const Detail = ({ product }) => {
  const media = product?.detailSection?.detailVideo || null;

  // Eagerly import common videos and images so Vite returns resolved URLs
  const videos = import.meta.glob("../../assets/**/*.{mp4,webm,ogg}", {
    eager: true,
    as: "url",
  });
  const images = import.meta.glob(
    "../../assets/**/*.{png,jpg,jpeg,webp,avif}",
    { eager: true, as: "url" }
  );

  const normalizeKey = (p) => `../../${p.replace(/^\.\//, "")}`;

  const resolveMedia = () => {
    // 1) Try exact heroVideo path
    if (media) {
      const key = normalizeKey(media);
      if (videos[key]) return { src: videos[key], type: "video" };
      if (images[key]) return { src: images[key], type: "image" };
    }

    // 2) Fallback by product name pattern hero.(ext)
    if (product?.name) {
      const base = `/${product.name}/hero.`.toLowerCase();
      const vidHit = Object.entries(videos).find(([k]) =>
        k.toLowerCase().includes(base)
      );
      if (vidHit) return { src: vidHit[1], type: "video" };

      const imgHit = Object.entries(images).find(([k]) =>
        k.toLowerCase().includes(base)
      );
      if (imgHit) return { src: imgHit[1], type: "image" };
    }

    return { src: null, type: null };
  };

  const { src, type } = resolveMedia();

  return (
    <section className="bg-[#F4F2F3] w-full flex flex-col md:flex-row justify-center items-center text-black">
      {/* Detail Info Section */}
      <div className="w-full md:w-1/2 h-full bg-white flex flex-col justify-center items-start gap-4 p-8">
        {/* title */}
        {product?.detailSection?.title && (
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {product.detailSection.title}
          </h2>
        )}

        {/* description */}
        {product?.detailSection?.description && (
          <p className="text-lg">
            {product.detailSection.description} Standard Equipment:
          </p>
        )}

        {/* standardEquipment */}
        {product?.detailSection?.standardEquipment && (
          <ul className="custom-list space-y-2">
            {product.detailSection.standardEquipment.map((item, index) => (
              <li className="custom-listLi" key={index}>
                {" "}
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Detail Video Section */}
      <div className="w-full md:w-1/2 bg-white">
        {type === "video" ? (
          <>
            <video
              className="w-full h-full object-cover"
              src={src}
              autoPlay
              muted
              loop
              playsInline
            />
          </>
        ) : (
          <img
            className="w-full h-full object-cover"
            src={src}
            alt={product?.name || "product hero"}
          />
        )}
      </div>
    </section>
  );
};

export default Detail;
