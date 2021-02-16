import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavbarComponent from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/categoria/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route path="*">
            <div>
              <h2>Error 404 - Página no encontrada</h2>
            </div>
          </Route>
        </Switch>
        
    </BrowserRouter>
  )
}

export default App;