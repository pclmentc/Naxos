import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useLanguage } from '../../context/languageContext';
import './Experience.scss';

import PecheImage from '../../assets/carrousel/peche.webp';
import ViticoleImage from '../../assets/carrousel/Viticole.webp';
import KitronImage from '../../assets/carrousel/Kitron.webp';
import CuisineImage from '../../assets/carrousel/Cuisine.webp';
import PoterieImage from '../../assets/carrousel/coursPoterie.webp';
import SculptureImage from '../../assets/carrousel/sculpture.webp';

const Experience = () => {
  const { translations } = useLanguage();
  const content = translations.experience;
  const slides = translations.slides;

  // Associer les images importées aux slides JSON
  const slideImages = [
    PecheImage,
    ViticoleImage,
    KitronImage,
    CuisineImage,
    PoterieImage,
    SculptureImage,
  ];

  return (
    <section className="experience" id="experience">
      <h1>{content.title}</h1>
      <div className="textSlide">
        <p>{content.cta}</p>
      </div>
      <Carousel infiniteLoop autoPlay showThumbs={false}>
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
