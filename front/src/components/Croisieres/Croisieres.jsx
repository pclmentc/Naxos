import { useLanguage } from '../../context/languageContext';
import './Croisieres.scss';
import croisiere1 from '../../assets/images/croisiere1.webp';
import croisiere2 from '../../assets/images/croisiere2.webp';
import croisiere3 from '../../assets/images/croisiere3.webp';
import croisiere4 from '../../assets/images/croisiere4.webp';
import croisiere5 from '../../assets/images/croisiere5.webp';
import croisiere6 from '../../assets/images/croisiere6.webp';

const Croisieres = () => {
  const { translations } = useLanguage();
  const data = translations.croisieres;

  
  const images = [
  { src: croisiere1, alt: 'Les Petites Cyclades' },
  { src: croisiere2, alt: 'Iraklia' },
  { src: croisiere3, alt: 'Delos et Mykonos' },
  { src: croisiere4, alt: 'Mykonos' },
  { src: croisiere5, alt: 'Santorin' },
  { src: croisiere6, alt: 'Paros' },
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
                src={images[index % images.length]?.src} 
                alt={images[index % images.length]?.alt} 
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
