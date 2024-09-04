import React from 'react';
import './CourseStructure.css';

export type ButtonLink = 'inscriu' | 'planse';

interface InfoBoxProps {
    title: string;
    text: string;
    buttonLink: ButtonLink;
}

const InfoBox: React.FC<InfoBoxProps> = (props) => {
    return (
        <div className="course-structure-section">
                <h2>
                    {props.title}
                    
                </h2>
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
