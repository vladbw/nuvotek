import { useTranslation } from "react-i18next";
import MapComponent from "../Map/MapComponent";
import './ContactPage.css';

function ContactPage() {
    const translate = useTranslation().t;

    return (
      <div className="contact-page-container width-70-large-res">
        <h2>{translate("contact_us_more_details")}</h2>
        <h2>{translate("contact_us_through_mail")} <br/> <span><a href= "mailto: contact@nuvotek.ro">&#9993;&nbsp;contact@nuvotek.ro</a></span></h2>
        <h2>{translate("contact_us_through_phone")} <br/> <span><a href="tel: +40728001020"> &#9742;&nbsp;0728001020</a></span></h2>
        <h2> {translate("contact_us_address")}</h2>
        <p>({translate("days_between")} &#128338;15:00 {translate("and")} 20:00) </p>
        <MapComponent/>
      </div>
    );
  }
  
  export default ContactPage; 
  