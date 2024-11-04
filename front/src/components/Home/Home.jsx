import './Home.scss';
import logo from '../../assets/images/logo.png';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div className='page'>

    <section id="Home">
      <img className='logo' src={logo} alt="Logo" style={{ width: '240px', height: 'auto' }} />      
    </section>

    <section id='intro'>
    <h1> Agence touristique</h1>
    </section>

    <Navbar />

    </div>
  );
};

export default Home;
