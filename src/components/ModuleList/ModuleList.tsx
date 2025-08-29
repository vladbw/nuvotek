import React, { useEffect, useState } from 'react';
import './ModuleList.css';
import CheckBoxIcon from './CheckboxIcon';
import { useTranslation } from 'react-i18next';

interface ILearningModule {
    title: string;
    subTitle: string;
    learningOutcomes: string[];
}


const ModuleList: React.FC = () => {
    const translate = useTranslation().t;
    const modules: ILearningModule[] = [
        {
            title: "module_1_title",
            subTitle: "module_1_subtitle",
            learningOutcomes: ['module_1_outcome_1', 'module_1_outcome_2', 'module_1_outcome_3', 'module_1_outcome_4', 'module_1_outcome_5', 'module_1_outcome_6', 'module_1_outcome_7', 'module_1_outcome_8', 'module_outcome_others']
        },
        {
            title: "module_2_title",
            subTitle: "module_2_subtitle",
            learningOutcomes: ['module_2_outcome_1', 'module_2_outcome_2', 'module_2_outcome_3', 'module_2_outcome_4', 'module_2_outcome_5', 'module_2_outcome_6', 'module_2_outcome_7', 'module_2_outcome_8', 'module_outcome_others']
        },
        {
            title: "module_3_title",
            subTitle: "module_3_subtitle",
            learningOutcomes: ['module_3_outcome_1', 'module_3_outcome_2', 'module_3_outcome_3', 'module_3_outcome_4', 'module_3_outcome_5', 'module_3_outcome_6', 'module_3_outcome_7', 'module_3_outcome_8', 'module_outcome_others']
        }
    ];

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
                    <p>{translate(module.subTitle)}</p>
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
