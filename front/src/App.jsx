import 'leaflet/dist/leaflet.css';
import './styles/App.scss';
import Home from './components/Home/Home';
import Excursions from './components/Excursions/Excursions';
import Croisieres from './components/Croisieres/Croisieres';
import Location from './components/Location/Location';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';

function App() {


  return (
    <>
      <Home />
      <Excursions/>
      <Croisieres/>
      <Location/>
      <Experience/>
      <Footer/>
      <BackToTopButton />
    </>
  );
}

export default App
