import InfoBox from "./InfoBox";
import CreativeStudioSection from "./CreativeStudioSection";
import InfoBar from "./InfoBar";
import InfoSectionWithPhoto from "./InfoSectionWithPhoto";
import ModuleList from "./ModuleList";
import GallerySection from "./GallerySection";

function HomePage() {
    return (
      <div className="homepage-container">
        <InfoSectionWithPhoto 
          title="CURSURI CREATIVE"
          subTitle="by Cristina Stănescu"
          text="Cu o experiență de peste 15 ani, formăm tineri artiști pentru o carieră în domenii creative, pentru admiterea la facultate, în România sau în străinătate."
          imgSrc="./intro_portrait.png"
          imgAlt="Cristina Stanescu"
        />
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
        <InfoSectionWithPhoto 
          title="Cum se desfășoară cursurile Nuvotek?"
          text="Cursurile la Nuvotek Academy by Cristina Stănescu se desfășoară fizic, la studioul nostru din Șoseaua Iancului, sau online, în funcție de locația cursantului. O ședință de curs durează 5 ore și se desfășoară o dată sau de două ori pe săptămână, în funcție de preferința cursantului."
          imgSrc="./drawing_progress.png"
          imgAlt="Drawing in progress"
        />
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
  