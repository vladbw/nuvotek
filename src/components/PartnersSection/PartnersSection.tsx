import { useTranslation } from "react-i18next";
import "./PartnersSection.css";

interface IPartner {
  alt: string;
  src: string;
  width: number;
  height: number;
}

const PARTNERS: IPartner[] = [
  {
    alt: "IED",
    src: "/partners/ied.webp",
    width: 378,
    height: 140
  },
  {
    alt: "UCAS Registered Centre",
    src: "/partners/ucas-registered.webp",
    width: 324,
    height: 140
  }
];

export default function PartnersSection() {
  const translate = useTranslation().t;

  return (
    <section className="partners-section width-70-large-res">
      <h1 className="h1-nuvotek">{translate("consultancy_partners_title")}</h1>
      <div className="partners-logos">
        {PARTNERS.map((partner) => (
          <img
            key={partner.alt}
            className="partner-logo"
            src={partner.src}
            alt={partner.alt}
            loading="lazy"
            width={partner.width}
            height={partner.height}
          />
        ))}
      </div>
    </section>
  );
}
