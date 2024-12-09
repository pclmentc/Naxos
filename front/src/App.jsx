import 'leaflet/dist/leaflet.css';
import './styles/App.scss';
import Home from './components/Home/Home';
import Excursions from './components/Excursions/Excursions';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Croisieres from './components/Croisieres/Croisieres';
import Location from './components/Location/Location';
import Experience from './components/Experience/Experience';

function App() {


  return (
    <>
      <ScrollToTopButton />
      <Home />
      <Excursions/>
      <Croisieres/>
      <Location/>
      <Experience/>
    </>
  );
}

export default App
