const Hero = ({ product }) => {
  const media = product?.heroVideo || null;

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

  if (!src) return <div className="hero-section" />;

  return (
    <>
      <section className="hero-section relative">
        {type === "video" ? (
          <>
            <div>
              <div className="absolute top-0 left-0 z-10 w-full h-full inset-0 bg-black/20" />
            </div>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={src}
              autoPlay
              muted
              loop
              playsInline
            />
          </>
        ) : (
          <>
            <div className="absolute top-0 left-0 z-10 w-full h-full inset-0 bg-black/35" />
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={src}
              alt={product?.name || "product hero"}
            />
          </>
        )}

        {/* Hero Content */}
        <div className="hidden absolute z-11 w-full h-full sm:flex flex-col justify-end items-center pb-10 text-white">
          <div className="flex flex-col justify-center items-center gap-3">
            {/* Product Name */}
            <h1 className="text-3xl md:text-5xl">{product?.name}</h1>

            {/* Product Tagline */}
            {product?.tagline && (
              <h4 className="text-xl md:text-2xl text-center">
                {product?.tagline}
              </h4>
            )}

            {/* Specs */}
            <div className="flex flex-wrap gap-5 justify-center items-center mt-4">
              {/* Sound Insulation */}
              {product?.specs?.soundInsulation && (
                <div className="flex flex-col items-center gap-3">
                  <span className="hero-specs-items">
                    {product.specs.soundInsulation}
                  </span>
                  <span className="text-sm">SOUND INSULATION</span>
                </div>
              )}

              {/* gaskets */}
              {product?.specs?.gaskets && (
                <div className="flex flex-col items-center gap-3">
                  <span className="hero-specs-items">
                    {product.specs.gaskets}
                  </span>
                  <span className="text-sm">GASKETS</span>
                </div>
              )}

              {/* thermalTransmittance */}
              {product?.specs?.thermalTransmittance && (
                <div className="flex flex-col items-center gap-3">
                  <span className="hero-specs-items">
                    {product.specs.thermalTransmittance}
                  </span>
                  <span className="text-sm">THERMAL TRANSMITTANCE</span>
                </div>
              )}

              {/* numberOfChambers */}
              {product?.specs?.numberOfChambers && (
                <div className="flex flex-col items-center gap-3">
                  <span className="hero-specs-items">
                    {product.specs.numberOfChambers}
                  </span>
                  <span className="text-sm">NUMBER OF CHAMBERS</span>
                </div>
              )}

              {/* installationDepth */}
              {product?.specs?.installationDepth && (
                <div className="flex flex-col items-center gap-3">
                  <span className="hero-specs-items">
                    {product.specs.installationDepth}
                  </span>
                  <span className="text-sm">INSTALLATION DEPTH</span>
                </div>
              )}

              {/* profileClass */}
              {product?.specs?.profileClass && (
                <div className="flex flex-col items-center gap-3">
                  <span className="hero-specs-items">
                    {product.specs.profileClass}
                  </span>
                  <span className="text-sm">PROFILE CLASS</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Content */}
      <div className="sm:hidden w-full h-full flex flex-col justify-end items-center py-5 px-2 text-center text-white bg-gray-900">
        <div className="flex flex-col justify-center items-center gap-3">
          {/* Product Name */}
          <h1 className="text-3xl md:text-5xl">{product?.name}</h1>

          {/* Product Tagline */}
          {product?.tagline && (
            <h4 className="text-xl md:text-2xl text-center">
              {product?.tagline}
            </h4>
          )}

          {/* Specs */}
          <div className="flex flex-wrap gap-5 justify-center items-center mt-4">
            {/* Sound Insulation */}
            {product?.specs?.soundInsulation && (
              <div className="flex flex-col items-center gap-3">
                <span className="hero-specs-items">
                  {product.specs.soundInsulation}
                </span>
                <span className="text-sm">SOUND INSULATION</span>
              </div>
            )}

            {/* gaskets */}
            {product?.specs?.gaskets && (
              <div className="flex flex-col items-center gap-3">
                <span className="hero-specs-items">
                  {product.specs.gaskets}
                </span>
                <span className="text-sm">GASKETS</span>
              </div>
            )}

            {/* thermalTransmittance */}
            {product?.specs?.thermalTransmittance && (
              <div className="flex flex-col items-center gap-3">
                <span className="hero-specs-items">
                  {product.specs.thermalTransmittance}
                </span>
                <span className="text-sm">THERMAL TRANSMITTANCE</span>
              </div>
            )}

            {/* numberOfChambers */}
            {product?.specs?.numberOfChambers && (
              <div className="flex flex-col items-center gap-3">
                <span className="hero-specs-items">
                  {product.specs.numberOfChambers}
                </span>
                <span className="text-sm">NUMBER OF CHAMBERS</span>
              </div>
            )}

            {/* installationDepth */}
            {product?.specs?.installationDepth && (
              <div className="flex flex-col items-center gap-3">
                <span className="hero-specs-items">
                  {product.specs.installationDepth}
                </span>
                <span className="text-sm">INSTALLATION DEPTH</span>
              </div>
            )}

            {/* profileClass */}
            {product?.specs?.profileClass && (
              <div className="flex flex-col items-center gap-3">
                <span className="hero-specs-items">
                  {product.specs.profileClass}
                </span>
                <span className="text-sm">PROFILE CLASS</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
