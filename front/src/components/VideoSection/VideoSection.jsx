import './VideoSection.scss';
import { useLanguage } from '../../context/languageContext';

const VideoSection = () => {
  const { translations } = useLanguage();
  return (
    <div>
    <div className="video-section">
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
