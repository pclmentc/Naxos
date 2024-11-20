import './Home.scss';
import logo from '../../assets/images/logo.png';
import Navbar from '../Navbar/Navbar';
import { useLanguage } from '../../context/languageContext';

const Home = () => {
  const { translations } = useLanguage();

  return (
    <div className='page'>

    <section id="Home">
      <img className='logo' src={logo} alt="Logo" style={{ width: '215px', height: 'auto' }} />      
    </section>

    <section id='intro'>
    <h1> {translations.welcome}</h1>
    </section>

    <Navbar />

    </div>
  );
};

export default Home;
