import React from 'react';
import './InfoBox.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MainCtaButton from '../MainCtaButton/MainCtaButton';

export type ButtonLink = 'inscriu' | 'planse' | 'consultancy';

interface InfoBoxProps {
    title?: string;
    text: string | string[];
    buttonLink?: ButtonLink;
    hasBackground?: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = (props) => {
      const translate = useTranslation().t;


    const renderCta = () => {
        if (props.buttonLink === 'inscriu') {
            return <MainCtaButton />;
        } else if (props.buttonLink === 'consultancy') {
            return <MainCtaButton preset='consultancy' />;
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

    const paragraphs = Array.isArray(props.text) ? props.text : [props.text];

    return (
        <div className={`width-70-large-res info-box ${props.hasBackground ? 'info-box-with-bg' : ''}`} >
                {props.title && (
                    <h1 className='h1-nuvotek'>
                        {props.title}
                    </h1>
                )}
                {paragraphs.map((paragraph, index) => (
                    <p key={`info-box-paragraph-${index}`}>
                        {paragraph}
                    </p>
                ))}
                {props.buttonLink && (
                    <div className="navbar__cta">
                        {renderCta()}
                    </div>
                )}
        </div>
    );
}

export default InfoBox;
