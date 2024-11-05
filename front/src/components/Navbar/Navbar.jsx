import './Navbar.scss';

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
  const icons = [
    { src: apollon, href: '#home', label: 'Porte du temple Apollon' },
    { src: panneau, href: '#home', label: 'Excursions et accompagnements' },
    { src: église, href: '#home', label: 'Eglises et villages' },
    { src: croisieres, href: '#home', label: 'Croisieres' },
    { src: kouros, href: '#home', label: 'Statue de Kouros' },
    { src: experiences, href: '#home', label: 'Experiences et partages' },
    { src: carafe, href: '#home', label: 'Carafe de naxos' },
    { src: ane, href: '#home', label: 'Location de moyens de transports' },
    { src: temple, href: '#home', label: 'Les temples' },
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
