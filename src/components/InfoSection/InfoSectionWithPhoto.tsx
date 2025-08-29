import React from 'react';
import './InfoSectionWithPhoto.css';
import { useTranslation } from 'react-i18next';

export interface InfoSectionWithPhotoProps {
    title: string;
    subTitle?: string;
    text: string;
    imgSrc: string;
    imgAlt: string;
}

const InfoSectionWithPhoto: React.FC<InfoSectionWithPhotoProps> = (props) => {
    const translate = useTranslation().t;

    return (
        <div className="content-section width-70-large-res">
            <div className="content-section__text">
                <h1 className='h1-nuvotek'>{props.title}</h1>
                {props.subTitle ? <h2>{props.subTitle}</h2> : null}
                <p>{props.text}</p>
                <div className="navbar__cta">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5Vz11lTctGTbPK9jPH9xLVRwrZSud37PyFpFDUAxRS82pZw/viewform" target="_blank" rel="noreferrer"><button className="navbar__button">{translate("register_cta")}</button></a>
                </div>
            </div>
            <div className="content-section__image">
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
        </div>
    );
}

export default InfoSectionWithPhoto;