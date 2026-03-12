import { useEffect, useState } from 'react';
import './MobileNavbar.css';
import { Link, NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import MobileLanguageSwitcher from '../LanguageSwitcher/MobileLanguageSwitcher';
import MainCtaButton from '../MainCtaButton/MainCtaButton';
import { NAV_ITEMS } from './navItems';

function MobileNavbar() {
    const translate = useTranslation().t;
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
      if (!isToggled) {
        return undefined;
      }

      const originalOverflow = document.body.style.overflow;

      document.body.style.overflow = "hidden";

      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsToggled(false);
        }
      };

      document.addEventListener("keydown", onKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.removeEventListener("keydown", onKeyDown);
      };
    }, [isToggled]);

  const onMenuItemClick = () => {
    setIsToggled(false);
  };

  return (
    <>
      <div
        className={`mobile-navbar-toggle-button ${isToggled ? "mobile-navbar-toggle-button--hidden" : ""}`}
      >
        <Hamburger
          toggled={isToggled}
          toggle={setIsToggled}
          label={isToggled ? "Close navigation menu" : "Open navigation menu"}
        />
      </div>
      <div
        className={`mobile-navbar-overlay ${isToggled ? "mobile-navbar-overlay-toggled" : ""}`}
        onClick={onMenuItemClick}
      >
        <aside
          className={`mobile-navbar-panel ${isToggled ? "mobile-navbar-panel-toggled" : ""}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mobile-navbar-panel__header">
            <Link to="/" className="mobile-navbar-panel__logo" onClick={onMenuItemClick}>
              <img src="./nuvotek_logo.png" alt="Nuvotek Academy" />
            </Link>
            <button
              type="button"
              className="mobile-navbar-panel__close"
              onClick={onMenuItemClick}
              aria-label="Close navigation menu"
            >
              <span />
              <span />
            </button>
          </div>

          <div className="mobile-navbar-panel__content">
            <nav className="mobile-navbar-nav" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onMenuItemClick}
                  className={({ isActive }) =>
                    `mobile-navbar-link ${isActive ? "mobile-navbar-link--active" : ""}`
                  }
                >
                  <span className="mobile-navbar-link__label">{translate(item.labelKey)}</span>
                  <span className="mobile-navbar-link__arrow" aria-hidden="true">/</span>
                </NavLink>
              ))}
            </nav>

            <div className="mobile-navbar-footer">
              <div className="mobile-navbar-footer__cta navbar__cta">
                <MainCtaButton />
              </div>
              <MobileLanguageSwitcher />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default MobileNavbar;
