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
        <source src="./src/assets/vidéo/IntroNaxos.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
    </div>
    <div className='photoPort'>
    <p className='citation'>{translations.videoSection1}</p>
    </div>
    </div>
  );
};

export default VideoSection;
