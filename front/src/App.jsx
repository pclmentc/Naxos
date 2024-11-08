
import './styles/App.scss';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import Home from './components/Home/Home';
import VideoSection from './components/VideoSection/VideoSection';

function App() {


  return (
    <>
      <Home />
      <LanguageSelector />
      <VideoSection/>
    </>
  );
}

export default App
