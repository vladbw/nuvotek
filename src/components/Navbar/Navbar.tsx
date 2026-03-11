import { Link } from "react-router-dom";
import './Navbar.css';
import MobileNavbar from "./MobileNavbar";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import MainCtaButton from "../MainCtaButton/MainCtaButton";

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
                <li><Link to="/consultanta">{translate("menu_item_4")}</Link></li>
                <li><Link to="/contact">{translate("menu_item_3")}</Link></li>
                <li>
                    <div className="navbar__cta">
                        <MainCtaButton />
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
  
