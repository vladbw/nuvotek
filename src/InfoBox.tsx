import React from 'react';
import './InfoBox.css';

export type ButtonLink = 'inscriu' | 'planse';

interface InfoBoxProps {
    title: string;
    text: string;
    buttonLink: ButtonLink;
    hasBackground?: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = (props) => {
    return (
        <div className={`width-70-large-res info-box ${props.hasBackground ? 'info-box-with-bg' : ''}`} >
                <h1 className='h1-nuvotek'>
                    {props.title}
                </h1>
                <p>
                    {props.text}
                </p>
                <div className="navbar__cta">
                    <button className="navbar__button">
                        {props.buttonLink === 'inscriu' ? 'MĂ ÎNSCRIU' : 'DESCOPERĂ PLANȘELE'}
                    </button>
                </div>
        </div>
    );
}

export default InfoBox;
