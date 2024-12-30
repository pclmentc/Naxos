import { useState, useEffect } from "react";
import "./Navbar.scss";
import { useLanguage } from "../../context/languageContext";

import apollon from "../../assets/icons/temple.webp";
import panneau from "../../assets/icons/panneau.webp";
import église from "../../assets/icons/eglise.webp";
import croisieres from "../../assets/icons/bateau.webp";
import kouros from "../../assets/icons/kouros.webp";
import experiences from "../../assets/icons/experience_et_partages.webp";
import carafe from "../../assets/icons/carafe_de_naxos.webp";
import ane from "../../assets/icons/ane.webp";
import temple from "../../assets/icons/templeNeuf.webp";

const Navbar = () => {
  const { translations } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 930);
  const [vibratingIndex, setVibratingIndex] = useState(null);

  const icons = [
    { src: apollon, label: translations.navbar.apollon },
    { src: panneau, href: "#excursions", label: translations.navbar.panneau },
    { src: église, label: translations.navbar.eglise },
    {
      src: croisieres,
      href: "#croisieres",
      label: translations.navbar.croisieres,
    },
    { src: kouros, label: translations.navbar.kouros },
    {
      src: experiences,
      href: "#experience",
      label: translations.navbar.experiences,
    },
    { src: carafe, label: translations.navbar.carafe },
    { src: ane, href: "#location", label: translations.navbar.ane },
    { src: temple, label: translations.navbar.temple },
  ];

  const filteredIcons = isMobile ? icons.filter((item) => item.href) : icons;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 930);
    };

    const interval = setInterval(() => {
      if (filteredIcons.length > 0) {
        const index = Math.floor(Math.random() * filteredIcons.length);
        setVibratingIndex(index);
        setTimeout(() => setVibratingIndex(null), 1000); // Supprime l'effet après 1 seconde
      }
    }, 3000); // Toutes les 3 secondes

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [filteredIcons]); // Dépend de `filteredIcons` pour refléter les changements de mode mobile

  return (
    <nav className="navbar-icons">
      {filteredIcons.map((item, index) => (
        <a
          key={index}
          href={item.href || "#"}
          className={`icon-link ${item.href ? "with-anchor" : ""} ${
            index === vibratingIndex ? "vibrating" : ""
          }`}
          aria-label={item.label}
        >
          <img src={item.src} alt={item.label} className="icon" />
          <span className="icon-description">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
