import { Link } from "react-router-dom";
import './Navbar.css';
import MobileNavbar from "./MobileNavbar";

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
            <Link to="/">
                <div className="navbar__logo">
                    <img src="./nuvotek_logo.png" alt="Logo" />
                </div>
            </Link>
            <ul className="navbar__links">
                <li><Link to="/despre-noi">Despre noi</Link></li>
                <li><Link to="/planse">Planșe</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <div className="navbar__cta">
                        <button className="navbar__button">MĂ ÎNSCRIU</button>
                    </div>
                </li>
            </ul>
            <MobileNavbar/>
            </nav>
        </div>
    );
  }
  
  export default Navbar;
  