import { useLanguage } from '../../context/languageContext';
import './LanguageSelector.scss';

const LanguageSelector = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('fr')}>Français</button>
    </div>
  );
};

export default LanguageSelector;
