import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../../logo.svg';

function NavbarComponent() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-5">
            <a className="navbar-brand" href="#">
                <img src={logo} width="40" height="40" className="d-inline-block align-middle" alt="logo"/> Curso ReactJS
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default NavbarComponent;
