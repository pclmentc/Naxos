import en from '../locales/en.json';
import fr from '../locales/fr.json';

const translations = { en, fr };

const useTranslations = (lang) => {
  return translations[lang] || translations.fr; 
};

export default useTranslations;
