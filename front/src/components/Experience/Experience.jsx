
import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useLanguage } from '../../context/languageContext';
import './Experience.scss'

const Experience = () => {
  const { translations } = useLanguage();
  const content = translations.experience;
  const slides = translations.slides;

  return (
    <section className="experience" id="experience">
      <h1>{content.title}</h1>
      <div className="textSlide">
      <p>
        {content.quote} <em>— {content.quoteAuthor}</em>
      </p>
      <p>{content.cta}</p>
      </div>
      <Carousel infiniteLoop autoPlay showThumbs={false}>
        {slides.map((slide, index) => (
          <div key={index} className="card">
            <h3>{slide.title}</h3>
            <img src={slide.img} alt={slide.title} />
            <p>{slide.text}</p>
            
            
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Experience;
