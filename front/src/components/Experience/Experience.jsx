import { useState, useEffect } from "react";
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

  // Gérer le défilement de la page
  const handleScroll = (shouldDisable) => {
    document.body.style.overflow = shouldDisable ? "hidden" : "auto";
  };

  useEffect(() => {
    handleScroll(!isPlaying);
    return () => handleScroll(false);
  }, [isPlaying]);

  // Gérer le survol ou l'interaction tactile
  const handleInteractionStart = (e) => {
    e.preventDefault(); // Empêche la sélection de texte ou image
    setIsPlaying(false);
  };

  const handleInteractionEnd = (e) => {
    e.preventDefault(); // Empêche la sélection de texte ou image
    setIsPlaying(true);
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
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
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
