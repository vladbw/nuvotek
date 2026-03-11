import React from 'react';
import './InfoSectionWithPhoto.css';
import MainCtaButton, { MainCtaPreset } from '../MainCtaButton/MainCtaButton';

export interface InfoSectionWithPhotoProps {
    title: string;
    subTitle?: string;
    text: string | string[];
    imgSrc: string;
    imgAlt: string;
    buttonPreset?: MainCtaPreset;
}

const InfoSectionWithPhoto: React.FC<InfoSectionWithPhotoProps> = (props) => {
    const paragraphs = Array.isArray(props.text) ? props.text : [props.text];

    return (
        <div className="content-section width-70-large-res">
            <div className="content-section__text">
                <h1 className='h1-nuvotek'>{props.title}</h1>
                {props.subTitle ? <h2>{props.subTitle}</h2> : null}
                {paragraphs.map((paragraph, index) => (
                    <p key={`info-section-paragraph-${index}`}>{paragraph}</p>
                ))}
                <div className="navbar__cta">
                    <MainCtaButton preset={props.buttonPreset}/>
                </div>
            </div>
            <div className="content-section__image">
                <img src={props.imgSrc} alt={props.imgAlt} width={"450px%"}/>
            </div>
        </div>
    );
}

export default InfoSectionWithPhoto;
