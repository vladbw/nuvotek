import React from 'react';
import './IntroSection.css';

const IntroSection: React.FC = () => {
    return (
        <div className="content-section">
            <div className="content-section__text">
                <h1>CURSURI CREATIVE</h1>
                <h2>by Cristina Stănescu</h2>
                <p>
                    Cu o experiență de peste 15 ani, formăm tineri artiști pentru o carieră în domenii creative,
                    pentru admiterea la facultate, în România sau în străinătate.
                </p>
                <button className="content-section__button">MĂ ÎNSCRIU</button>
            </div>
            <div className="content-section__image">
                <img src="./intro_portrait.png" alt="Cristina Stănescu" />
            </div>
        </div>
    );
}

export default IntroSection;