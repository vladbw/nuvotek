import React from 'react';
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

    return (
        <div className="module-list-container">
            {modules.map(module => 
            <div className="single-module">
                <h2>{module.title}</h2>
                <p>{module.subTitle}</p>
                <div className='single-module-item-list'>
                    <ul>
                        {module.learningOutcomes.map(learningOutcome => <li><CheckBoxIcon/>{learningOutcome}</li>)}
                    </ul>
                </div>
            </div>)}
        </div>
    );
}

export default ModuleList;
