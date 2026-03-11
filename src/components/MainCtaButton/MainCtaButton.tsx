import { useTranslation } from "react-i18next";
import "./MainCtaButton.css";

export type MainCtaPreset = "default" | "consultancy";

interface MainCtaButtonProps {
  preset?: MainCtaPreset;
}

const CTA_CONFIG = {
  default: {
    labelKey: "register_cta",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSe5Vz11lTctGTbPK9jPH9xLVRwrZSud37PyFpFDUAxRS82pZw/viewform"
  },
  consultancy: {
    labelKey: "consultancy_cta",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdhExMg5Cw0wQvqx_O24M7gFO_hqYGv1AAGOpuLd42oZYnaXg/viewform"
  }
} as const;

export default function MainCtaButton({ preset = "default" }: MainCtaButtonProps) {
  const translate = useTranslation().t;
  const config = CTA_CONFIG[preset];

  return (
    <a href={config.href} target="_blank" rel="noreferrer">
      <button className={`navbar__button main-cta-button main-cta-button--${preset}`}>
        {translate(config.labelKey)}
      </button>
    </a>
  );
}
