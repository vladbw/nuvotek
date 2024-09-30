import React from 'react';
import './InfoSectionWithPhoto.css';

export interface InfoSectionWithPhotoProps {
    title: string;
    subTitle?: string;
    text: string;
    imgSrc: string;
    imgAlt: string;
}

const InfoSectionWithPhoto: React.FC<InfoSectionWithPhotoProps> = (props) => {
    return (
        <div className="content-section">
            <div className="content-section__text">
                <h1>{props.title}</h1>
                {props.subTitle ? <h2>{props.subTitle}</h2> : null}
                <p>{props.text}</p>
                <div className="navbar__cta">
                    <button className="navbar__button">MĂ ÎNSCRIU</button>
                </div>
            </div>
            <div className="content-section__image">
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
        </div>
    );
}

export default InfoSectionWithPhoto;