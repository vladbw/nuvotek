import { useState } from "react";
import "./FAQ.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export interface IFAQWidgetProps {
  questionIndexes?: number[];
  showRedirectSubtitle?: boolean;
}

export default function FAQ(props: IFAQWidgetProps) {

  const { t: translate, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const translations = (i18n.getResourceBundle(i18n.language, "translation") ?? {}) as Record<string, unknown>;

  const questionIndexes = props.questionIndexes && props.questionIndexes.length > 0
    ? props.questionIndexes.filter((index, position, array) => (
      Number.isInteger(index) && index > 0 && array.indexOf(index) === position
    ))
    : Object.keys(translations)
      .map((key) => key.match(/^faq_q_(\d+)$/)?.[1])
      .filter((value): value is string => value !== undefined)
      .map(Number)
      .sort((first, second) => first - second);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderSubTitle = () => {
    if (!props.showRedirectSubtitle) {
      return translate("faq_subtitle");
    }

    const text = translate("faq_subtitle_redirect");
    const words = text.split(" ");
    const lastWord = words.pop();
    const rest = words.join(" ");

    return (
      <Link to="/faq">
        {rest} {lastWord && <span className="faq-redirect-last-word">{lastWord}</span>}
      </Link>
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
        {questionIndexes.map((index) => (
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
