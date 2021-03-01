import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Modal from 'react-modal'
import NavbarComponent from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import CartComponent from './components/Cart'

/* import { CartProvider } from './context/CartContext' - Pase el Provider al Index.JS porque no me tomaba el context del estado del modal.*/ 

import { useContext } from 'react'
import { CartContext } from './context/CartContext'

Modal.setAppElement('#root')

function App() {

  const {cartModal, setCartModal} = useContext(CartContext)
  
  return (
    
      <BrowserRouter>
        <NavbarComponent />

        <Modal isOpen={cartModal} onRequestClose={()=> setCartModal(false)} shouldCloseOnOverlayClick={false} style={{
          overlay: {
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.65)'
          },
          content: {
            top: '2rem',
            bottom: '2rem',
            left: '10rem',
            right:  '10rem',
            padding:'0px'
          }
          }}>
          <CartComponent />
        </Modal>
        
          <Switch>
            <Route exact path="/">
              <h1>{cartModal}</h1>
              <ItemListContainer />
            </Route>
            <Route exact path="/categoria/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <CartComponent />
            </Route>
            <Route path="*">
              <div className="mt-5">
                <h2>Error 404 - Página no encontrada</h2>
              </div>
            </Route>
          </Switch>
      </BrowserRouter>

  )
}

export default App;