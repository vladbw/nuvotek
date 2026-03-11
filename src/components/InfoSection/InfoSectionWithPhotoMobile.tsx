import React from 'react';
import './InfoSectionWithPhotoMobile.css';
import { InfoSectionWithPhotoProps } from './InfoSectionWithPhoto';
import MainCtaButton from '../MainCtaButton/MainCtaButton';

const InfoSectionWithPhotoMobile: React.FC<InfoSectionWithPhotoProps> = (props) => {
    const paragraphs = Array.isArray(props.text) ? props.text : [props.text];

    return (
        <div className="content-section-mobile">
            <h1 className='h1-nuvotek'>{props.title?.toUpperCase()}</h1>
            <img src={props.imgSrc} alt={props.imgAlt} />
            {props.subTitle ? <h2>{props.subTitle}</h2> : null}
            {paragraphs.map((paragraph, index) => (
                <p key={`info-section-mobile-paragraph-${index}`}>{paragraph}</p>
            ))}
            <div className="navbar__cta">
                <MainCtaButton preset={props.buttonPreset}/>
                </div>
        </div>
    );
}

export default InfoSectionWithPhotoMobile;
