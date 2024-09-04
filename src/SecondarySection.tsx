import React from 'react';
import './IntroSection.css';

const SecondarySection: React.FC = () => {
    return (
        <div className="content-section">
            <div className="content-section__text">
                <h1>Cum se desfășoară cursurile Nuvotek?</h1>
                <p>
                    Cursurile la Nuvotek Academy by Cristina Stănescu se desfășoară fizic, la studioul nostru din Șoseaua Iancului, sau online, în funcție de locația cursantului. 
                    O ședință de curs durează 5 ore și se desfășoară o dată sau de două ori pe săptămână, în funcție de preferința cursantului.
                </p>
                <button className="content-section__button">MĂ ÎNSCRIU</button>
            </div>
            <div className="content-section__image">
                <img src="./drawing_progress.png" alt="Drawing in progress" />
            </div>
        </div>
    );
}

export default SecondarySection;