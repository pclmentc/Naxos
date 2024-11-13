
import './styles/App.scss';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import Home from './components/Home/Home';
import VideoSection from './components/VideoSection/VideoSection';
import Excursions from './components/Excursions/Excursions';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

function App() {


  return (
    <>
      <ScrollToTopButton />
      <Home />
      <LanguageSelector />
      <VideoSection/>
      <Excursions/>
    </>
  );
}

export default App
