import i18n from "i18next";
import "./MobileLanguageSwitcher.css"; // optional

export default function MobileLanguageSwitcher() {
  const handleLanguageChange = (lang: "ro" | "en") => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="mobile-lang-switcher">
      <button
        onClick={() => handleLanguageChange("ro")}
        className={`mobile-lang-option ${i18n.language === "ro" ? "active" : ""}`}
      >
        Română
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`mobile-lang-option ${i18n.language === "en" ? "active" : ""}`}
      >
        English
      </button>
    </div>
  );
}
