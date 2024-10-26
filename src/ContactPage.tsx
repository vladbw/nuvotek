import MapComponent from "./MapComponent";
import './ContactPage.css';

function ContactPage() {
    return (
      <div className="contact-page-container width-70-large-res">
        <h2>Pentru detalii suplimentare, vă invităm să ne contactați astfel:</h2>
        <h2>prin e-mail, la adresa <br/> <span><a href= "mailto: contact@nuvotek.ro">&#9993;&nbsp;contact@nuvotek.ro</a></span></h2>
        <h2>prin telefon, la numărul <br/> <span><a href="tel: +40728001020"> &#9742;&nbsp;0745150342</a></span></h2>
        <h2> De asemenea, vă așteptăm în studioul nostru din Șoseaua Iancului 46, București:</h2>
        <p>(Luni - Vineri, între &#128338;15:00 și 20:00) </p>
        <MapComponent/>
      </div>
    );
  }
  
  export default ContactPage;
  