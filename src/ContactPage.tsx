import MapComponent from "./MapComponent";
import './ContactPage.css';

function ContactPage() {
    return (
      <div className="contact-page-container width-70-large-res">
        <h2>Pentru detalii suplimentare, vă invităm să ne contactați astfel:</h2>
        <h2>prin e-mail, la adresa <span><a href= "mailto: contact@nuvotek.ro">contact@nuvotek.ro</a></span></h2>
        <h2>prin telefon, la numărul <span><a href="tel: +40728001020">0728001020</a></span></h2>
        <h2> De asemenea, vă așteptăm în studioul nostru din Șoseaua Iancului 46, București :</h2>
        <MapComponent/>
      </div>
    );
  }
  
  export default ContactPage;
  