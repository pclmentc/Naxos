
import './styles/App.scss';
import Home from './components/Home/Home';
import Excursions from './components/Excursions/Excursions';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Croisieres from './components/Croisieres/Croisieres';

function App() {


  return (
    <>
      <ScrollToTopButton />
      <Home />
      <Excursions/>
      <Croisieres/>
    </>
  );
}

export default App
