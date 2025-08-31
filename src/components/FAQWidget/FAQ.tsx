import { useState } from "react";
import "./FAQ.css";
import { useTranslation } from "react-i18next";


type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "faq_q_1",
    answer: "faq_a_1"
  },
  {
    question: "faq_q_2",
    answer: "faq_a_2"
  },
  {
    question: "faq_q_3",
    answer: "faq_a_3"
  },
  {
    question: "faq_q_4",
    answer: "faq_a_4"
  }
];

export default function FAQ() {

  const translate = useTranslation().t;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title h1-nuvotek">
        {translate("faq_title")}
      </h1>
      <p className="faq-subtitle">
        {translate("faq_subtitle")}
      </p>

      <div className="faq-list">
        {faqData.map((item, i) => (
          <div
            key={i}
            className={`round-corners-nuvotek box-shadow-nuvotek faq-item ${openIndex === i ? "open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggle(i)}
            >
              {translate(item.question)}
              <span className={`faq-icon ${openIndex === i ? "rotate" : ""}`}>
                ▼
              </span>
            </button>
            <div className="faq-answer">
              <p>{translate(item.answer)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
