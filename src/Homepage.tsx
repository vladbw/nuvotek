import InfoBox from "./InfoBox";
import CreativeStudioSection from "./CreativeStudioSection";
import InfoBar from "./InfoBar";
import IntroSection from "./IntroSection";
import ModuleList from "./ModuleList";
import SecondarySection from "./SecondarySection";
import GallerySection from "./GallerySection";

function HomePage() {
    return (
      <div className="homepage-container">
        <IntroSection/>
        <InfoBar/>
        <CreativeStudioSection/>
        <InfoBar/>
        <InfoBox 
          title="STRUCTURA CURSURILOR NUVOTEK"
          buttonLink="inscriu" 
          text="Cursurile noastre sunt împărțite în 3 module, modulul introductiv (modulul 1), modulul mediu (modulul 2) și modulul avansat (modulul 3). Fiecare cursant, indiferent de nivelul de pregătire anterior este repartizat la modulul 1. În funcție de evoluția acestuia, durata petrecută la fiecare modul poate să difere. Modulele 2 și 3 se focalizează pe pregătirea domeniului specific."
        />
        <ModuleList/>
        <InfoBar/>
        <SecondarySection/>
        <InfoBox
          title="Cum evoluează cursanții Nuvotek?"
          buttonLink="planse" 
          text="Descoperă evoluția cursanților noștri în galeria de mai jos. De la modulul introductiv la care se descoperă epura, axonometria cu 3 corpuri sau perspectiva la 2 puncte de fugă, însoțită de materialitate, până la modulul avansat, la care cursanții dau dovadă de maturitate artistică și complexitate în ceea ce privește conceptele lor unice, fiecare planșă este dovada vie a pasiunii și dedicării lor."
        />
        <InfoBar/>
        <GallerySection/>
      </div>
    );
  }
  
  export default HomePage;
  