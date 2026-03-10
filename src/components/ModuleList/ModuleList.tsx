import React, { useEffect, useState } from 'react';
import './ModuleList.css';
import CheckBoxIcon from './CheckboxIcon';
import { useTranslation } from 'react-i18next';

export interface ILearningModule {
    title: string;
    subTitle?: string;
    learningOutcomes: string[];
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
                    <h2>{translate(module.title)}</h2>
                    {module.subTitle && <p>{translate(module.subTitle)}</p>}
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
