import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ro from "./languages/ro.json";
import en from "./languages/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ro: { translation: ro },
      en: { translation: en }
    },
    lng: localStorage.getItem("lang") || "ro",
    fallbackLng: "ro",
    interpolation: { escapeValue: false }
  });

i18n
  .on("languageChanged", (lng) => {
    localStorage.setItem("lang", lng);
  });

export default i18n;