import { useLanguage } from '../../context/languageContext';
import './LanguageSelector.scss';
import En from '../../assets/langues/en.png';
import Fr from '../../assets/langues/fr.png';

const LanguageSelector = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button onClick={() => switchLanguage('en')}><img src={En} alt="English" /></button>
      <button onClick={() => switchLanguage('fr')}><img src={Fr} alt="Français" /></button>
    </div>
  );
};

export default LanguageSelector;
