import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLanguage } from "../../context/languageContext";
import "./Experience.scss";

import PecheImage from "../../assets/carrousel/peche.webp";
import ViticoleImage from "../../assets/carrousel/Viticole.webp";
import KitronImage from "../../assets/carrousel/Kitron.webp";
import CuisineImage from "../../assets/carrousel/Cuisine.webp";
import PoterieImage from "../../assets/carrousel/coursPoterie.webp";
import SculptureImage from "../../assets/carrousel/sculpture.webp";

const Experience = () => {
  const { translations } = useLanguage();
  const content = translations.experience;
  const slides = translations.slides;

  const slideImages = [
    PecheImage,
    ViticoleImage,
    KitronImage,
    CuisineImage,
    PoterieImage,
    SculptureImage,
  ];

  // État pour gérer l'auto-play
  const [isPlaying, setIsPlaying] = useState(true);

  // Gérer le survol ou l'interaction tactile
  const handleInteractionStart = () => {
    setIsPlaying(false);
  };

  const handleInteractionEnd = () => {
    setIsPlaying(true);
  };

  // Permettre le défilement vertical même pendant l'interaction avec le carrousel
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientY;
    e.target.addEventListener("touchmove", (e) => {
      const touchMove = e.touches[0].clientY;
      if (Math.abs(touchMove - touchStart) > 10) {
        // Si on détecte un mouvement vertical, on laisse défiler la page
        e.stopPropagation();
      }
    });
  };

  return (
    <section className="experience" id="experience">
      <h1>{content.title}</h1>
      <div className="textSlide">
        <p>{content.cta}</p>
      </div>
      <Carousel
        infiniteLoop
        autoPlay={isPlaying}
        showThumbs={false}
        interval={8000} // Durée entre deux slides (en millisecondes)
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={(e) => handleTouchStart(e)}  // Ajouter gestion du touch start
        onTouchEnd={handleInteractionEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="card">
            <h3>{slide.title}</h3>
            <img src={slideImages[index]} alt={slide.title} />
            <p>{slide.text}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Experience;
