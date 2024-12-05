import { useLanguage } from '../../context/languageContext';
import './Location.scss';
import ane from "../../assets/images/location.jpg";

const Location = () => {
  const { translations } = useLanguage();
  const data = translations.location;

  return (
    <section className="location-section" id='location'>
      <h2 className="section-title">{data.title}</h2>
      <p className="section-intro">{data.intro}</p>
      <p className="section-p">{data.p}</p>
      <img src={ane} alt="Location" />

    </section>
  );
};

export default Location;
