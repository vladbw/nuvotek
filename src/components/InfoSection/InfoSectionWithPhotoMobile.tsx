import React from 'react';
import './InfoSectionWithPhotoMobile.css';
import { InfoSectionWithPhotoProps } from './InfoSectionWithPhoto';
import { useTranslation } from 'react-i18next';

const InfoSectionWithPhotoMobile: React.FC<InfoSectionWithPhotoProps> = (props) => {
    const translate = useTranslation().t;

    return (
        <div className="content-section-mobile">
            <h1 className='h1-nuvotek'>{props.title}</h1>
            <img src={props.imgSrc} alt={props.imgAlt} />
            {props.subTitle ? <h2>{props.subTitle}</h2> : null}
            <p>{props.text}</p>
            <div className="navbar__cta">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5Vz11lTctGTbPK9jPH9xLVRwrZSud37PyFpFDUAxRS82pZw/viewform" target="_blank" rel="noreferrer"><button className="navbar__button">{translate("register_cta")}</button></a>
                </div>
        </div>
    );
}

export default InfoSectionWithPhotoMobile;