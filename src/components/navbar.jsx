import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../state/dataContext';

function Navbar() {

    const user = useContext(DataContext).user;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container">
                <Link className="navbar-brand text-white fw-bold" to="/">
                    Organika Store
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/home">
                                🏠 Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/catalog">
                                🍎 Catalog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/cart">
                                🛒 View Cart
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact">
                                📞 Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">
                                ☰ About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin">
                                🔑 Admin
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#">
                                <i class="fa-solid fa-circle-user me-1"></i>
                                {user.name}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
