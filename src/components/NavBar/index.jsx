import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'
import logo from './../../logo.svg'
import CartWidgetComponent from './../CartWidget'

const NavbarComponent = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top px-5">
            <a className="navbar-brand" href="/">
                <img src={logo} width="40" height="40" className="d-inline-block align-middle" alt="logo"/> Curso ReactJS
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
