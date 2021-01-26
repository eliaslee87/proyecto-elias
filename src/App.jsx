import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponent/>
      </header>
      <body>
        <ItemListContainer greeting={`Bienvenidos al Container`} />
      </body>
    </div>
  )
}

export default App;
