import InfoBox from "../Infobox/InfoBox";
import CreativeStudioSection from "../CreativeStudioSection/CreativeStudioSection";
import InfoSectionWithPhoto from "../InfoSection/InfoSectionWithPhoto";
import ModuleList from "../ModuleList/ModuleList";
import InfoSectionWithPhotoMobile from "../InfoSection/InfoSectionWithPhotoMobile";
import { useState, useEffect } from "react";
import TestimonialsSection from "../Testimonials/TestimonialsSection";
import { Gallery } from "../Gallery/Gallery";
import { useTranslation } from "react-i18next";
import FAQ from "../FAQWidget/FAQ";

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
          title={translate("course_structure_title")}
          buttonLink="inscriu" 
          text={translate("course_structure_text")}
        />
        <ModuleList/>
        <InfoSectionComponent 
          title={translate("course_org_title")}
          text={translate("course_org_text")}
          imgSrc="./drawing_progress.png"
          imgAlt="Drawing in progress"
        />
        <InfoBox
          hasBackground
          title={translate("student_evolution_title")}
          buttonLink="planse" 
          text={translate("student_evolution_text")}
        />
        <TestimonialsSection/>
        <Gallery/>
        <FAQ/>
      </div>
    );
  }
  
  export default HomePage;
  