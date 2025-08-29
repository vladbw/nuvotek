import React from 'react';
import './InfoBox.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export type ButtonLink = 'inscriu' | 'planse';

interface InfoBoxProps {
    title: string;
    text: string;
    buttonLink: ButtonLink;
    hasBackground?: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = (props) => {
      const translate = useTranslation().t;


    const renderCta = () => {
        if (props.buttonLink === 'inscriu') {
            return (
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5Vz11lTctGTbPK9jPH9xLVRwrZSud37PyFpFDUAxRS82pZw/viewform" target="_blank" rel="noreferrer">
                    <button className="navbar__button">
                        {translate("register_cta")}
                    </button>
                </a>
            );
        } else {
            return (
                <Link to="/planse">
                    <button className="navbar__button">
                        {translate("discover_cta")}
                    </button>
                </Link>
            );
        }
    }

    return (
        <div className={`width-70-large-res info-box ${props.hasBackground ? 'info-box-with-bg' : ''}`} >
                <h1 className='h1-nuvotek'>
                    {props.title}
                </h1>
                <p>
                    {props.text}
                </p>
                <div className="navbar__cta">
                    {renderCta()}
                </div>
        </div>
    );
}

export default InfoBox;
