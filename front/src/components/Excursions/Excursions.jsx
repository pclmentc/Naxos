import { useState, useEffect } from "react";
import { useLanguage } from "../../context/languageContext";
import "./Excursions.scss";

const Excursions = () => {
  const { translations } = useLanguage();
  const data = translations;
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (theme) => setSelectedTheme(theme);
  const closeModal = () => {
    setSelectedTheme(null);
    setSelectedCategory(null);
  };

  const openCategoryModal = (category) => setSelectedCategory(category);

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
            onClick={() => openModal(theme)}
            role="button"
            tabIndex="0"
          >
            <img src={theme.image} alt={theme.title} />
            <h3>{theme.title}</h3>
            <p>{theme.description.slice(0, 100)}...</p>
          </div>
        ))}
      </div>

      {/* Modale principale */}
      {selectedTheme && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedTheme.image} alt={selectedTheme.title} />
            <h3>{selectedTheme.title}</h3>
            {selectedTheme.description.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            {selectedTheme.image1 && (
              <img
                src={selectedTheme.image1}
                alt={`${selectedTheme.title} additional`}
              />
            )}

            {/* Affichage des catégories si elles existent */}
            {selectedTheme.categories && (
              <div className="categories">
                <h4>Vos options :</h4>
                <div className="categories-container">
                  {selectedTheme.categories.map((category, index) => (
                    <div
                      key={index}
                      className="category"
                      onClick={() => openCategoryModal(category)}
                      role="button"
                      tabIndex="0"
                    >
                      <h5>{category.title}</h5>
                      <img src={category.image} alt={category.title} />
                      <img src={category.image1}  />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modale pour les catégories */}
      {selectedCategory && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedCategory.image} alt={selectedCategory.title} />
            {selectedCategory.image1 && (
              <img
                src={selectedCategory.image1}
                alt={`${selectedCategory.title} additional`}
              />
            )}
            <h4>{selectedCategory.title}</h4>
          </div>
        </div>
      )}
    </section>
  );
};

export default Excursions;
