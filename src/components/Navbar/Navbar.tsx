import { Link } from "react-router-dom";
import './Navbar.css';
import MobileNavbar from "./MobileNavbar";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Navbar() {
    const translate = useTranslation().t;

    return (
        <div className="navbar-container box-shadow-nuvotek">
            <nav className="navbar width-70-large-res">
            <Link to="/">
                <div className="navbar__logo">
                    <img src="./nuvotek_logo.png" alt="Logo" />
                </div>
            </Link>
            <ul className="navbar__links">
                <li><Link to="/despre-noi">{translate("menu_item_1")}</Link></li>
                <li><Link to="/planse">{translate("menu_item_2")}</Link></li>
                <li><Link to="/contact">{translate("menu_item_3")}</Link></li>
                <li>
                    <div className="navbar__cta">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5Vz11lTctGTbPK9jPH9xLVRwrZSud37PyFpFDUAxRS82pZw/viewform" target="_blank" rel="noreferrer"><button className="navbar__button">{translate("register_cta")}</button></a>
                    </div>
                </li>
                <li>
                    <LanguageSwitcher iconSrc="/globe-icon.png" alt="Change language" />
                </li>
            </ul>
            <MobileNavbar/>
            </nav>
        </div>
    );
  }
  
  export default Navbar;
  