import { useState } from 'react';
import './MobileNavbar.css';
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import MobileLanguageSwitcher from '../LanguageSwitcher/MobileLanguageSwitcher';

function MobileNavbar() {
    const translate = useTranslation().t;
    
    let [isToggled, setIsToggled] = useState(false);

    const getOverlayClassname = () => {
        const base = "mobile-navbar-overlay";
        if (isToggled) {
            return `${base} mobile-navbar-overlay-toggled`;
        };

        return base;
    }

  const onMenuItemClick = () => {
    setIsToggled(!isToggled);
  }  

  return (
    <>
    <div className={'mobile-navbar-toggle-button'} onClick={() => {setIsToggled(!isToggled)}}>
        <Hamburger toggled={isToggled} toggle={setIsToggled}/>
    </div>
    <div className={getOverlayClassname()}>
        <div className={'mobile-navbar-container'}>
            <Link to="/despre-noi" onClick={() => onMenuItemClick()}>{translate("menu_item_1")}</Link>
            <Link to="/planse" onClick={() => onMenuItemClick()}>{translate("menu_item_2")}</Link>
            <Link to="/contact" onClick={() => onMenuItemClick()}>{translate("menu_item_3")}</Link>
            <MobileLanguageSwitcher/>
        </div>
    </div>
    </>
  );
}

export default MobileNavbar;
