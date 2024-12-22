import './Home.scss';
import logo from '/logo.webp';
import Navbar from '../Navbar/Navbar';
import { useLanguage } from '../../context/languageContext';
import Langue from '../LanguageSelector/LanguageSelector';
import VideoSection from '../VideoSection/VideoSection';

const Home = () => {
  const { translations } = useLanguage();

  return (
    <div className='page'>

    <section id="Home">
      <img className='logo' src={logo} alt="Logo Naxos Connection" style={{ width: '250px', height: 'auto' }} />    
    <section id='intro'>
      <h1> {translations.welcome1}</h1>
      <p> {translations.welcome2}</p>
    </section>
    <Langue />
    </section>
    <Navbar />
    <VideoSection/>
    

    </div>
  );
};

export default Home;
