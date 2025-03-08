import './VideoSection.scss';
import { useLanguage } from '../../context/languageContext';
import { useState, useEffect } from 'react';

const VideoSection = () => {
  const { translations } = useLanguage();
  const [isPromoFullscreen, setIsPromoFullscreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPromoFullscreen(false);
    }, 2000); // Délai de 3 secondes avant la transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className={`video-section ${isPromoFullscreen ? 'fullscreen-mode' : ''}`}>
        {isPromoFullscreen && <div className="fullscreen-background"></div>}
        <article className={`promotion ${isPromoFullscreen ? 'fullscreen' : 'normal'}`}>
          <img 
            style={{ width: '250px', height: 'auto',borderRadius:'15px' }}
            src='/promo/promotion.jpg' 
            alt='promotion du moment' 
          />
        </article>

        <article className='videoArticle'>
          <h2>{translations.videoSection} <em>— {translations.quoteAuthor}</em></h2>
        </article>

        <video controls>
          <source src="/vidéo/IntroNaxos.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
      <div className='photoPort'>
        <p
          className="citation"
          dangerouslySetInnerHTML={{
            __html: translations.videoSection1.replace(
              "en français",
              "&nbsp;<strong class='highlighted-text'>en français</strong>"
            ),
          }}
        ></p>
      </div>
    </div>
  );
};

export default VideoSection;
