import React from 'react';
import './InfoBar.css';

const InfoBar: React.FC = () => {
    return (
        <div className="category-nav">
            <ul className="category-nav__list">
                <li>ARHITECTURĂ</li>
                <li>DESIGN INTERIOR</li>
                <li>FASHION DESIGN</li>
                <li>GAME DESIGN</li>
                <li>SCENOGRAFIE</li>
            </ul>
        </div>
    );
}

export default InfoBar;