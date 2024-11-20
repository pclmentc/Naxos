import { useLanguage } from '../../context/languageContext';
import './Croisieres.scss';

const Croisieres = () => {
  const { translations } = useLanguage();
  const data = translations.croisieres;
  const images = [
    { src: '/images/croisiere1.jpg', alt: 'Les Petites Cyclades' },
    { src: '/images/croisiere2.jpg', alt: 'Iraklia' },
    { src: '/images/croisiere3.jpg', alt: 'Delos et Mykonos' },
    { src: '/images/croisiere4.jpg', alt: 'Mykonos' },
    { src: '/images/croisiere5.jpg', alt: 'Santorin' },
    { src: '/images/croisiere6.jpg', alt: 'Paros' }
  ];

  return (
    <section className="croisieres" id="croisieres">
    <div className='introCroisieres'>
      <h2>{data.title}</h2>
      <p>{data.intro}</p>
    </div>

      <div className="croisieres-container">
        {data.cruises.map((cruise, index) => (
          <div key={index} className="croisiere-item">
            <div className="croisiere-image-container">
              <img
                src={images[index]?.src}
                alt={images[index]?.alt}
                className="croisiere-image"
              />
            </div>
            <div className="croisiere-content">
              <h3>{cruise.title}</h3>
              {cruise.description.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Croisieres;
