import React, { useState, useRef, useEffect } from "react";
import i18n from "i18next";
import "./LanguageSwitcher.css";

type LanguageSwitcherProps = {
  iconSrc: string;   // PNG path from public/
  alt?: string;      // optional alt text
};

export default function LanguageSwitcher({ iconSrc, alt = "Language" }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: "ro" | "en") => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="language-switcher" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="lang-button"
      >
        <img src={iconSrc} alt={alt} className="lang-icon" />
      </button>

      {open && (
        <div className="lang-menu">
          <button
            onClick={() => handleLanguageChange("ro")}
            className={`lang-option ${i18n.language === "ro" ? "active" : ""}`}
          >
            🇷🇴 Română
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className={`lang-option ${i18n.language === "en" ? "active" : ""}`}
          >
            🇬🇧 English
          </button>
        </div>
      )}
    </div>
  );
}
