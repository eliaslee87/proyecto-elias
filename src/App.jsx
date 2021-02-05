import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavbarComponent/>
      </div>
      <div className="body">
        <ItemListContainer greeting="Estos son los productos disponibles" />
        <ItemDetailContainer />
      </div>
    </div>
  )
}

export default App;
