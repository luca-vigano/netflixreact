import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/logo.png"
import "bootstrap-icons/font/bootstrap-icons.css";

const NetflixNavbar = function () {
    return (
        <Navbar collapseOnSelect expand="md" bg='dark' data-bs-theme="dark">
            <Container fluid>
                <a className="navbar-brand" href="#"
                ><img src={Logo} style={{ width: 100, height: 55 }} alt="logoImg" /></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">TV Shows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Recently Added</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">My List</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center text-light">
                        <i className="bi bi-search icons"></i>
                        <div id="kids" className="fw-bold">KIDS</div>
                        <i className="bi bi-bell icons"></i>
                        <i className="bi bi-person-circle icons"></i>
                    </div>
                </div>
            </Container>
        </Navbar>

    )
}

export default NetflixNavbar