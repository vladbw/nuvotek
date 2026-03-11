import { useTranslation } from "react-i18next";
import "./WhyUsSection.css";

export default function WhyUsSection() {
  const translate = useTranslation().t;

  return (
    <section className="why-us-section width-70-large-res">
      <div className="why-us-section__text">
        <h1 className="h1-nuvotek">{translate("why_us_title")}</h1>
        <p>{translate("why_us_par_1")}</p>
        <p>{translate("why_us_par_2")}</p>
      </div>
      <div className="why-us-section__images">
        <img
          className="why-us-image why-us-image--primary"
          src="/why_us_img_1.webp"
          alt="Nuvotek student"
          loading="lazy"
        />
        <img
          className="why-us-image why-us-image--secondary"
          src="/why_us_img_2.webp"
          alt="Nuvotek student activity"
          loading="lazy"
        />
      </div>
    </section>
  );
}
