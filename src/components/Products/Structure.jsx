import React from "react";

const Structure = ({ product }) => {
  const list = product?.structureImages || [];

  // Eagerly import images so Vite returns resolved URLs
  const imagesMap = import.meta.glob(
    "../../assets/**/*.{png,jpg,jpeg,webp,avif}",
    { eager: true, as: "url" }
  );

  const normalizeKey = (p) => `../../${p.replace(/^\.\//, "")}`;

  const resolveImage = (p) => {
    if (!p) return null;
    const key = normalizeKey(p);
    if (imagesMap[key]) return imagesMap[key];
    try {
      return new URL(`../../${p.replace(/^\.\//, "")}`, import.meta.url).href;
    } catch {
      return null;
    }
  };

  return (
    <div className="w-full flex justify-start items-center flex-wrap gap-6 p-8">
      {list.length > 0 &&
        list.map((p, i) => {
          const src = resolveImage(p);
          if (!src) return null;
          return (
            <img
              key={`${p}-${i}`}
              src={src}
              alt={`${product?.name || "Product"} structure ${i + 1}`}
              className="w-100 h-auto object-contain"
            />
          );
        })}
    </div>
  );
};

export default Structure;
