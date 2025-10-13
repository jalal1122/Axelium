import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router";

export default function Hero() {
  const navigate = useNavigate();

  const slides = [
    {
      image: "./hero1.jpg",
      title: "Des menuiseries de qualité",
      subtitle: "Fenêtres, portes et volets sur mesure",
    },
    {
      image: "./hero2.jpg",
      title: "Performance, design et durabilité",
      subtitle: "Découvrez notre savoir-faire en menuiserie",
    },
    {
      image: "./hero3.jpg",
      title: "Des solutions adaptées à chaque projet",
      subtitle: "Professionnalisme et excellence au service de vos besoins",
    },
  ];

  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        // pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text */}
              <div className="relative text-center text-white px-6 py-3">
                <h1
                  className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                  data-aos="fade-up"
                >
                  {slide.title}
                </h1>
                <p
                  className="text-lg md:text-xl mb-6 font-light drop-shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.subtitle}
                </p>
                <button onClick={() => navigate("/contact")} className="button-special text-xl font-bold">Demander un devis</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
