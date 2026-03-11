import React, { useEffect, useState } from 'react';
import './ModuleList.css';
import CheckBoxIcon from './CheckboxIcon';
import { useTranslation } from 'react-i18next';

export interface ILearningModule {
    title: string;
    subTitle?: string;
    learningOutcomes: string[];
    headerFlag?: string;
}

interface IModuleListProps {
    modules: [ILearningModule, ILearningModule, ILearningModule];
}

const ModuleList: React.FC<IModuleListProps> = ({ modules }) => {
    const translate = useTranslation().t;

      const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
    
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const renderContents = () => {
        return modules.map((module: ILearningModule, index) => 
                <div className="single-module box-shadow-nuvotek round-corners-nuvotek" key={`single-module-${index}`}>
                    <div className={`single-module-header ${module.headerFlag ? "single-module-header--with-flag" : ""}`}>
                        <h2 className="single-module-title">{translate(module.title)}</h2>
                        {module.subTitle && <p className="single-module-subtitle">{translate(module.subTitle)}</p>}
                        {module.headerFlag && (
                            <span className="single-module-header-flag" aria-hidden="true">
                                {module.headerFlag}
                            </span>
                        )}
                    </div>
                    <div className='single-module-item-list'>
                        <ul>
                            {module.learningOutcomes.map((learningOutcome, loIndex) => <li className='module-checkbox-item' key={`single-module-outcome-${index}-${loIndex}`}><CheckBoxIcon/><p>{translate(learningOutcome)}</p></li>)}
                        </ul>
                    </div>
                </div>
                )
    }

    if (windowWidth <= 700) {
        return <div className="module-list-container-vertical">
        {renderContents()}
    </div>
    } else {
    return <div className="module-list-container width-70-large-res">
            {renderContents()}
        </div>
    }
}

export default ModuleList;
