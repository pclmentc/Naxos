import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';
import { LanguageProvider } from './context/languageContext.jsx';

createRoot(document.getElementById('root')).render(
  
    <LanguageProvider>
      <App />
    </LanguageProvider>  
)
