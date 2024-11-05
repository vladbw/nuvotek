import { Link } from "react-router-dom";
import './Navbar.css';
import MobileNavbar from "./MobileNavbar";

function Navbar() {
    return (
        <div className="navbar-container box-shadow-nuvotek">
            <nav className="navbar width-70-large-res">
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
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5Vz11lTctGTbPK9jPH9xLVRwrZSud37PyFpFDUAxRS82pZw/viewform" target="_blank" rel="noreferrer"><button className="navbar__button">MĂ ÎNSCRIU</button></a>
                    </div>
                </li>
            </ul>
            <MobileNavbar/>
            </nav>
        </div>
    );
  }
  
  export default Navbar;
  