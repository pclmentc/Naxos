import './Home.scss';
import logo from '../../assets/images/logo.png';

const Home = () => {
  return (
    <div className='page'>

    <section id="Home">
      <img className='logo' src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />      
    </section>

    <section id='intro'>
    <h1> test</h1>
    <p>salutation</p>
    </section>

    </div>
  );
};

export default Home;
