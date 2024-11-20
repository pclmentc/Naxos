import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/languageContext';
import './Excursions.scss';

const Excursions = () => {
  const { translations } = useLanguage();
  const data = translations;
  const [selectedTheme, setSelectedTheme] = useState(null);

  const openModal = (theme) => setSelectedTheme(theme);
  const closeModal = () => setSelectedTheme(null);

  // Gestion de la touche "Escape" pour fermer la modale
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section className="excursions" id="excursions">
      <h2>{data.title}</h2>
      <div className="excursions-container">
        {data.themes.map((theme, index) => (
          <div
            key={index}
            className="excursion-theme"
            onClick={() => openModal(theme)} // Clic sur toute la carte
            role="button" // Rendre la carte accessible
            tabIndex="0" // Rendre la carte focusable pour le clavier
          >
            <img src={theme.image} alt={theme.title} />
            <h3>{theme.title}</h3>
            <p>{theme.description.slice(0, 100)}...</p>
          </div>
        ))}
      </div>

      {/* Modale responsive */}
      {selectedTheme && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedTheme.image} alt={selectedTheme.title} />
            <h3>{selectedTheme.title}</h3>
            {selectedTheme.description.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Excursions;
