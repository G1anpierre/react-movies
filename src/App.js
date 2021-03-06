import Header from './components/header/Header'
import Main from './components/main/Main'
import Carrusel from './components/carrusel/Carrusel'
import ImageMulan from './images/mulan.png'
import ImageRaya from './images/raya.png'
import ImageUnidos from './images/unidos.png'
import MasValoradas from './pages/mas-valoradas/MasValoradas'
import MenosValoradas from './pages/menos-valoradas/MenosValoradas'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom'
import {useEffect} from 'react'

const imageGroup = [ImageMulan, ImageRaya, ImageUnidos]

function App() {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/all-movies')
      const data = await response.json()
      console.log('data from api: ', data)
    }

    getData()
  })

  return (
    <div className="App">
      <Router>
        <Header />
        <Carrusel imageGroup={imageGroup} />
        <Switch>
          <Route exact path="/" component={withRouter(Main)} />
          <Route
            exact
            path="/menosvaloradas"
            component={withRouter(MenosValoradas)}
          />
          <Route
            exact
            path="/masvaloradas"
            component={withRouter(MasValoradas)}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
