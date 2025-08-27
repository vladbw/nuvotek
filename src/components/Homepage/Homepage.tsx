import InfoBox from "../Infobox/InfoBox";
import CreativeStudioSection from "../CreativeStudioSection/CreativeStudioSection";
import InfoSectionWithPhoto from "../InfoSection/InfoSectionWithPhoto";
import ModuleList from "../ModuleList/ModuleList";
import InfoSectionWithPhotoMobile from "../InfoSection/InfoSectionWithPhotoMobile";
import { useState, useEffect } from "react";
import TestimonialsSection from "../Testimonials/TestimonialsSection";
import { Gallery } from "../Gallery/Gallery";
import { useTranslation } from "react-i18next";


function HomePage() {
  const translate = useTranslation().t;

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const InfoSectionComponent = windowWidth > 600 ? InfoSectionWithPhoto : InfoSectionWithPhotoMobile;

    return (
      <div className="homepage-container">
        <InfoSectionComponent
          title={translate("main_header")}
          subTitle="by Cristina Stănescu"
          text={translate("main_header_text")}
          imgSrc="./intro_portrait.png"
          imgAlt="Cristina Stanescu"
          />
        <CreativeStudioSection/>
        <InfoBox 
          title="Structura Cursurilor Nuvotek"
          buttonLink="inscriu" 
          text="Cursurile noastre sunt împărțite în 3 module, modulul introductiv (modulul 1), modulul mediu (modulul 2) și modulul avansat (modulul 3). Fiecare cursant, indiferent de nivelul de pregătire anterior este repartizat la modulul 1. În funcție de evoluția acestuia, durata petrecută la fiecare modul poate să difere. Modulele 2 și 3 se focalizează pe pregătirea domeniului specific."
        />
        <ModuleList/>
        <InfoSectionComponent 
          title="Cum se desfășoară cursurile Nuvotek?"
          text="Cursurile la Nuvotek Academy by Cristina Stănescu se desfășoară fizic, la studioul nostru din Șoseaua Iancului, sau online, în funcție de locația cursantului. O ședință de curs durează 5 ore și se desfășoară o dată sau de două ori pe săptămână, în funcție de preferința cursantului."
          imgSrc="./drawing_progress.png"
          imgAlt="Drawing in progress"
        />
        <InfoBox
          hasBackground
          title="Cum evoluează cursanții Nuvotek?"
          buttonLink="planse" 
          text="Descoperă evoluția cursanților noștri în galeria de mai jos. De la modulul introductiv la care se descoperă epura, axonometria cu 3 corpuri sau perspectiva la 2 puncte de fugă, însoțită de materialitate, până la modulul avansat, la care cursanții dau dovadă de maturitate artistică și complexitate în ceea ce privește conceptele lor unice, fiecare planșă este dovada vie a pasiunii și dedicării lor."
        />
        <TestimonialsSection/>
        <Gallery/>
      </div>
    );
  }
  
  export default HomePage;
  