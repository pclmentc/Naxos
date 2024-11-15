import { useState } from 'react';
import { useLanguage } from '../../context/languageContext';
import Slider from 'react-slick';
import './Croisieres.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Croisieres = () => {
  const { translations } = useLanguage();
  const data = translations.croisieres; // Les données pour les croisières
  const [selectedCruise, setSelectedCruise] = useState(null);

  const openModal = (cruise) => setSelectedCruise(cruise);
  const closeModal = () => setSelectedCruise(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="croisieres" id="croisieres">
      <h2>{data.title}</h2>
      <p>{data.intro}</p>

      <div className="croisieres-container">
        {data.cruises.map((cruise, index) => (
          <div key={index} className="croisiere-item">
            <h3>{cruise.title}</h3>
            <Slider {...sliderSettings}>
              {cruise.images.map((image, idx) => (
                <img key={idx} src={image} alt={`${cruise.title} ${idx + 1}`} />
              ))}
            </Slider>
            <p>{cruise.description.slice(0, 100)}...</p>
            <button onClick={() => openModal(cruise)} className="read-more">
              {translations.readMore}
            </button>
          </div>
        ))}
      </div>

      {/* Modale responsive */}
      {selectedCruise && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>{selectedCruise.title}</h3>
            <Slider {...sliderSettings}>
              {selectedCruise.images.map((image, idx) => (
                <img key={idx} src={image} alt={`${selectedCruise.title} ${idx + 1}`} />
              ))}
            </Slider>
            {selectedCruise.description.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Croisieres;
