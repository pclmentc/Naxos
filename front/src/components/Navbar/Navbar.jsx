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
    { src: apollon, href: '#home', label: 'porte du temple Apollon' },
    { src: panneau, href: '#home', label: 'excursions et accompagnements' },
    { src: église, href: '#home', label: 'eglises et villages' },
    { src: croisieres, href: '#home', label: 'croisieres' },
    { src: kouros, href: '#home', label: 'kouros' },
    { src: experiences, href: '#home', label: 'experiences et partages' },
    { src: carafe, href: '#home', label: 'carafe de naxos' },
    { src: ane, href: '#home', label: 'location de moyens de transports' },
    { src: temple, href: '#home', label: 'temples' },
  ];

  return (
    <nav className="navbar-icons">
      {icons.map((item, index) => (
        <a key={index} href={item.href} className="icon-link" aria-label={item.label}>
          <img src={item.src} alt={item.label} className="icon" />
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
