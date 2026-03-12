import { Link } from "react-router-dom";
import './Navbar.css';
import MobileNavbar from "./MobileNavbar";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import MainCtaButton from "../MainCtaButton/MainCtaButton";
import { NAV_ITEMS } from "./navItems";

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
                {NAV_ITEMS.map((item) => (
                    <li key={item.to}>
                        <Link to={item.to}>{translate(item.labelKey)}</Link>
                    </li>
                ))}
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
  
