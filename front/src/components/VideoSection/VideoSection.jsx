import './VideoSection.scss';
import { useLanguage } from '../../context/languageContext';

const VideoSection = () => {
  const { translations } = useLanguage();
  return (
    <div className="video-section">
    <h2>{translations.videoSection}</h2>
      <video controls>
        <source src="./src/assets/vidéo/IntroNaxos.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
    </div>
  );
};

export default VideoSection;
