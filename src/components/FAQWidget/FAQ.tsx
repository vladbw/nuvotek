import { useState } from "react";
import "./FAQ.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export interface IFAQWidgetProps {
  finalIndex: number;
  showRedirectSubtitle?: boolean;
}

export default function FAQ(props: IFAQWidgetProps) {

  const translate = useTranslation().t;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderSubTitle = () => {
    if (!props.showRedirectSubtitle) {
      return <p className="faq-subtitle">{translate("faq_subtitle")}</p>;
    }

    const text = translate("faq_subtitle_redirect");
    const words = text.split(" ");
    const lastWord = words.pop();
    const rest = words.join(" ");

    return (
      <p className="faq-subtitle">
        <Link to="/faq">
          {rest} {lastWord && <span className="faq-redirect-last-word">{lastWord}</span>}
        </Link>
      </p>
    );
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title h1-nuvotek">
        {translate("faq_title")}
      </h1>
      <p className="faq-subtitle">
        {renderSubTitle()}
      </p>

      <div className="faq-list">
        {Array.from({ length: props.finalIndex }, (_, i) => i + 1).map((index) => (
          <div
            key={index}
            className={`round-corners-nuvotek box-shadow-nuvotek faq-item ${openIndex === index ? "open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggle(index)}
            >
              {translate(`faq_q_${index}`)}
              <span className={`faq-icon ${openIndex === index ? "rotate" : ""}`}>
                ▼
              </span>
            </button>
            <div className="faq-answer">
              <p>{translate(`faq_a_${index}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
