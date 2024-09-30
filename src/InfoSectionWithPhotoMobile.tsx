import React from 'react';
import './InfoSectionWithPhotoMobile.css';
import { InfoSectionWithPhotoProps } from './InfoSectionWithPhoto';

const InfoSectionWithPhotoMobile: React.FC<InfoSectionWithPhotoProps> = (props) => {
    return (
        <div className="content-section-mobile">
            <h1>{props.title}</h1>
            <img src={props.imgSrc} alt={props.imgAlt} />
            {props.subTitle ? <h2>{props.subTitle}</h2> : null}
            <p>{props.text}</p>
            <div className="navbar__cta">
                    <button className="navbar__button">MĂ ÎNSCRIU</button>
                </div>
        </div>
    );
}

export default InfoSectionWithPhotoMobile;