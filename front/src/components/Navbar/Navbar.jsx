import './Navbar.scss';
import { useLanguage } from '../../context/languageContext';

// Importation des icônes personnalisées
import apollon from '../../assets/icons/temple.webp';
import panneau from '../../assets/icons/panneau.webp';
import église from '../../assets/icons/eglise.webp';
import croisieres from '../../assets/icons/bateau.webp';
import kouros from '../../assets/icons/kouros.webp';
import experiences from '../../assets/icons/experience_et_partages.webp';
import carafe from '../../assets/icons/carafe_de_naxos.webp';
import ane from '../../assets/icons/ane.webp';
import temple from '../../assets/icons/templeNeuf.webp';

const Navbar = () => {
  const { translations } = useLanguage();

  const icons = [
    { src: apollon, href: '#home', label: translations.navbar.apollon },
    { src: panneau, href: '#home', label: translations.navbar.panneau },
    { src: église, href: '#home', label: translations.navbar.eglise },
    { src: croisieres, href: '#home', label: translations.navbar.croisieres },
    { src: kouros, href: '#home', label: translations.navbar.kouros },
    { src: experiences, href: '#home', label: translations.navbar.experiences },
    { src: carafe, href: '#home', label: translations.navbar.carafe },
    { src: ane, href: '#home', label: translations.navbar.ane },
    { src: temple, href: '#home', label: translations.navbar.temple },
  ];

  return (
    <nav className="navbar-icons">
      {icons.map((item, index) => (
        <a key={index} href={item.href} className="icon-link" aria-label={item.label}>
          <img src={item.src} alt={item.label} className="icon" />
          <span className="icon-description">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
