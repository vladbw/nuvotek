import React from 'react';
import './CreativeStudioSection.css';
import { useTranslation } from 'react-i18next';
import MainCtaButton from '../MainCtaButton/MainCtaButton';

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
                    <MainCtaButton />
                </div>
            </div>
            <div className="image-section">
                <img src="/creative_studio_sketch.png" alt="Creative Studio" />
            </div>
        </div>
    );
}

export default CreativeStudioSection;
