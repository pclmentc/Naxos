import { useLanguage } from '../../context/languageContext';
import './LanguageSelector.scss';
import En from '../../assets/langues/en.webp';
import Fr from '../../assets/langues/fr.webp';
import { useState } from 'react';

const LanguageSelector = () => {
  const { switchLanguage } = useLanguage();
  const [activeLanguage, setActiveLanguage] = useState('fr'); // Par défaut 'fr'

  const handleLanguageSwitch = (language) => {
    setActiveLanguage(language);
    switchLanguage(language);
  };

  return (
    <div className="language-selector">
      <button
        onClick={() => handleLanguageSwitch('en')}
        className={activeLanguage === 'en' ? 'active' : ''}
      >
        <img src={En} alt="English" />
      </button>
      <button
        onClick={() => handleLanguageSwitch('fr')}
        className={activeLanguage === 'fr' ? 'active' : ''}
      >
        <img src={Fr} alt="Français" />
      </button>
    </div>
  );
};

export default LanguageSelector;
