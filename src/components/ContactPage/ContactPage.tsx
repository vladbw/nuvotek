import { useTranslation } from "react-i18next";
import MapComponent from "../Map/MapComponent";
import './ContactPage.css';

const CONTACT_SETS = [
  {
    serviceKey: "contact_service_courses_badge",
    serviceNameKey: "contact_service_courses_name",
    email: "contact@nuvotek.ro",
    phoneDisplay: "0728 001 020",
    phoneHref: "+40728001020"
  },
  {
    serviceKey: "contact_service_consultancy_badge",
    serviceNameKey: "contact_service_consultancy_name",
    email: "consultanta@nuvotek.ro",
    phoneDisplay: "0728 159 171",
    phoneHref: "+40728159171"
  }
] as const;

function ContactPage() {
  const translate = useTranslation().t;

  return (
    <div className="contact-page-container width-70-large-res">
      <h1 className="h1-nuvotek contact-page-title">{translate("contact_us_more_details")}</h1>

      <section className="contact-page-panel">
        <div className="contact-page-grid">
          {CONTACT_SETS.map((contact) => (
            <article key={contact.serviceKey} className="contact-service-card">
              <p className="contact-service-card__badge">{translate(contact.serviceKey)}</p>
              <h2 className="contact-service-card__title">{translate(contact.serviceNameKey)}</h2>

              <div className="contact-service-card__detail">
                <p className="contact-service-card__label">{translate("contact_details_email_label")}</p>
                <a href={`mailto:${contact.email}`} className="contact-service-card__value">
                  {contact.email}
                </a>
              </div>

              <div className="contact-service-card__detail">
                <p className="contact-service-card__label">{translate("contact_details_phone_label")}</p>
                <a href={`tel:${contact.phoneHref}`} className="contact-service-card__value">
                  {contact.phoneDisplay}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="contact-page-meta">
          <p>{translate("contact_location_line")}</p>
          <span aria-hidden="true">•</span>
          <p>{translate("contact_schedule_line")}</p>
        </div>
      </section>

      <MapComponent/>
    </div>
  );
}

export default ContactPage;
  
