import Header from './components/header/Header';
import Main from './components/main/Main';
import Carrusel from './components/carrusel/Carrusel';
import ImageMulan from './images/mulan.png';
import ImageRaya from './images/raya.png';
import ImageUnidos from './images/unidos.png';

const imageGroup = [ImageMulan, ImageRaya, ImageUnidos];

function App() {
  return (
    <div className="App">
      <Header />
      <Carrusel imageGroup={imageGroup}/>
      <Main />
    </div>
  );
}

export default App;
