import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidgetComponent from './../CartWidget'

const NavbarComponent = () => {

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top px-sm-5">
            <Link className="navbar-brand" to="/">
                <img src="/logo192.png" width="30" height="30" className="d-inline-block align-middle" alt="logo"/> Curso ReactJS
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-sm-end text-center" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/info" activeClassName="active" className="nav-link">Informacion</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/nosotros" activeClassName="active" className="nav-link">Nosotros</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contacto" activeClassName="active" className="nav-link">Contacto</NavLink>
                </li>
                </ul>
                <CartWidgetComponent />
            </div>
            
        </nav>
    </div>
  )
}

export default NavbarComponent
