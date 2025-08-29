import i18n from "i18next";

export default function LanguageSwitcher() {
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("ro")}>RO</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
}