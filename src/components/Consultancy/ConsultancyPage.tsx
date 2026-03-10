import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import InfoSectionWithPhoto from "../InfoSection/InfoSectionWithPhoto";
import InfoSectionWithPhotoMobile from "../InfoSection/InfoSectionWithPhotoMobile";
import TestimonialsSection from "../Testimonials/TestimonialsSection";
import TESTIMONIALS from "../Testimonials/Testimonials";
import FAQ from "../FAQWidget/FAQ";
import ModuleList from "../ModuleList/ModuleList";
import { CONSULTANCY_MODULE_SET_INDEXES, MODULE_SETS } from "../ModuleList/moduleSets";

function ConsultancyPage() {
  const translate = useTranslation().t;

    const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const InfoSectionComponent = windowWidth > 600 ? InfoSectionWithPhoto : InfoSectionWithPhotoMobile;

  return <div className="consultancy-page-container">
            <InfoSectionComponent
          title={translate("consultancy_page_title")}
          text={translate("consultancy_page_main_text")}
          imgSrc="./img1_consultancy.webp"
          imgAlt="Consultanta aplicat in strainatate"
          />
          {CONSULTANCY_MODULE_SET_INDEXES.map((setIndex) => {
            const modules = MODULE_SETS[setIndex];

            if (!modules) {
              return null;
            }

            return <ModuleList key={`consultancy-modules-${setIndex}`} modules={modules} />;
          })}
          <TestimonialsSection testimonials={TESTIMONIALS.slice(6)}/>
          <FAQ questionIndexes={[20, 21, 22, 23, 24]} showRedirectSubtitle/>
  </div>;
}

export default ConsultancyPage;
