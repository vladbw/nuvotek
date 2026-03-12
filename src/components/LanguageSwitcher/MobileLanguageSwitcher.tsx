import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "./MobileLanguageSwitcher.css"; // optional

export default function MobileLanguageSwitcher() {
  const { i18n: i18nInstance } = useTranslation();

  const handleLanguageChange = (lang: "ro" | "en") => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="mobile-lang-switcher">
      <button
        onClick={() => handleLanguageChange("ro")}
        className={`mobile-lang-option ${i18nInstance.language === "ro" ? "active" : ""}`}
      >
        Română
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`mobile-lang-option ${i18nInstance.language === "en" ? "active" : ""}`}
      >
        English
      </button>
    </div>
  );
}
