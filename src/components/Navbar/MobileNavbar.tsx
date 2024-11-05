import { useState } from 'react';
import './MobileNavbar.css';
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';

function MobileNavbar() {
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
            <Link to="/despre-noi" onClick={() => onMenuItemClick()}>Despre noi</Link>
            <Link to="/planse" onClick={() => onMenuItemClick()}>Planșe</Link>
            <Link to="/contact" onClick={() => onMenuItemClick()}>Contact</Link>
        </div>
    </div>
    </>
  );
}

export default MobileNavbar;
