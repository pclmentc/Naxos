import { useState, useEffect } from 'react';
import './Navbar.scss';
import { useLanguage } from '../../context/languageContext';

import apollon from '../../assets/icons/temple.png';
import panneau from '../../assets/icons/panneau.webp';
import église from '../../assets/icons/eglise.png';
import croisieres from '../../assets/icons/bateau.png';
import kouros from '../../assets/icons/kouros.png';
import experiences from '../../assets/icons/experience_et_partages.webp';
import carafe from '../../assets/icons/carafe_de_naxos.webp';
import ane from '../../assets/icons/ane.webp';
import temple from '../../assets/icons/templeNeuf.webp';

const Navbar = () => {
  const { translations } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 930);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 930);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const icons = [
    { src: apollon, label: translations.navbar.apollon },
    { src: panneau, href: '#excursions', label: translations.navbar.panneau },
    { src: église, label: translations.navbar.eglise },
    { src: croisieres, href: '#croisieres', label: translations.navbar.croisieres },
    { src: kouros, label: translations.navbar.kouros },
    { src: experiences, href: '#experience', label: translations.navbar.experiences },
    { src: carafe, label: translations.navbar.carafe },
    { src: ane, href: '#location', label: translations.navbar.ane },
    { src: temple, label: translations.navbar.temple },
  ];

  const filteredIcons = isMobile ? icons.filter(item => item.href) : icons;

  return (
    <nav className="navbar-icons">
      {filteredIcons.map((item, index) => (
        <a key={index} href={item.href || '#'} className="icon-link" aria-label={item.label}>
          <img src={item.src} alt={item.label} className="icon" />
          <span className="icon-description">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
