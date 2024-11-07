import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import useTranslations from '../services/useTranslastions';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');  
  const translations = useTranslations(language);

  // Change la langue active
  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ translations, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook pour accéder au contexte facilement
export const useLanguage = () => useContext(LanguageContext);
