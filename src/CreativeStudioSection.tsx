import React from 'react';
import './CreativeStudioSection.css';

const CreativeStudioSection: React.FC = () => {
    return (
        <div className="creative-studio-section width-70-large-res">
            <div className="text-section">
                <h1 className='h1-nuvotek'>Mai mult decât un studio al creației</h1>
                <p>
                    Nuvotek Academy by Cristina Stănescu este o comunitate adaptată tinerilor și stilului lor de viață, 
                    în care barierele învățământului formal sunt îndepărtate în vederea obținerii unei experiențe educaționale 
                    plăcută pentru cursanți. 
                </p>
                <p>
                    Echipa noastră te ajută să îți redefinești concepția despre ceea ce înseamnă să fii artist.
                </p>
                <div className="navbar__cta">
                    <button className="navbar__button">MĂ ÎNSCRIU</button>
                </div>
            </div>
            <div className="image-section">
                <img src="/creative_studio_sketch.png" alt="Creative Studio" />
            </div>
        </div>
    );
}

export default CreativeStudioSection;
