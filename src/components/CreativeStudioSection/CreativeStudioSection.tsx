import React from 'react';
import './CreativeStudioSection.css';
import { useTranslation } from 'react-i18next';

const CreativeStudioSection: React.FC = () => {
    const translate = useTranslation().t;
    
    return (
        <div className="creative-studio-section width-70-large-res">
            <div className="text-section">
                <h1 className='h1-nuvotek'>{translate("creative_studio_title")}</h1>
                <p>
                    {translate("creative_studio_text_1")}
                </p>
                <p>
                    {translate("creative_studio_text_2")}
                </p>
                <div className="navbar__cta">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5Vz11lTctGTbPK9jPH9xLVRwrZSud37PyFpFDUAxRS82pZw/viewform" target="_blank" rel="noreferrer"><button className="navbar__button">{translate("register_cta")}</button></a>
                </div>
            </div>
            <div className="image-section">
                <img src="/creative_studio_sketch.png" alt="Creative Studio" />
            </div>
        </div>
    );
}

export default CreativeStudioSection;
