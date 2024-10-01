import React, { useEffect, useState } from 'react';
import './ModuleList.css';
import CheckBoxIcon from './CheckboxIcon';

interface ILearningModule {
    title: string;
    subTitle: string;
    learningOutcomes: string[];
}


const ModuleList: React.FC = () => {
    const modules: ILearningModule[] = [
        {
            title: "Modulul 1",
            subTitle: "INTRODUCTIV",
            learningOutcomes: ['Linia și hașura', 'Axonometrie', 'Perspectivă', 'Intersecții de corpuri geometrice', 'Reguli de compoziție', 'Materialitate', 'Compoziții de obiecte', 'Drapaj', 'Multe altele...']
        },
        {
            title: "Modulul 2",
            subTitle: "MEDIU",
            learningOutcomes: ['Studiu perspectivă mobilier', 'Perspectivă de interior', 'Studiu stiluri arhitecturale', 'Concept mobilier', 'Planuri de case', 'Concepte arhitectură generală', 'Studiu corp uman', 'Proiect “The Future is Now”', 'Multe altele...']
        },
        {
            title: "Modulul 3",
            subTitle: "AVANSAT",
            learningOutcomes: ['Machete', 'Concept proiect cu client', 'Concept “Orașul Viitorului', 'Geometrie descriptivă avansată', 'Concept sustenabilitate', 'Simulări teste', 'Concepte abstracte', 'Portofoliu ', 'Multe altele...']
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
                <div className="single-module" key={`single-module-${index}`}>
                    <h2>{module.title}</h2>
                    <p>{module.subTitle}</p>
                    <div className='single-module-item-list'>
                        <ul>
                            {module.learningOutcomes.map((learningOutcome, loIndex) => <li className='module-checkbox-item' key={`single-module-outcome-${index}-${loIndex}`}><CheckBoxIcon/><p>{learningOutcome}</p></li>)}
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
    return <div className="module-list-container">
            {renderContents()}
        </div>
    }
}

export default ModuleList;
