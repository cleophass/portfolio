import React from 'react';
import Project from './projectsfolio'; // Assurez-vous que le chemin est correct
import sol250 from '/public/SOL250.png'; // Import local image
import TADAI from '/public/TADAI.png'; // Import local image
import bodyscan from '/public/BodyScan.png'; // Import local image
const projects = [
  {
    image: sol250, // Utilisez l'image importée ici
    title: 'Solution 250',
    description: "Web application d'analyse de feedback pour les entreprises utilisant le NLP.",
    tools: 'ReactJS',
  },
  {
    image: TADAI, // Utilisez l'image importée ici
    title: 'TADAI',
    description: 'application web de recommandation musicale en utilisant des modèles de machine learning.',
    tools: 'ReactJS, PCA, AWS',
  },
  {
    image: bodyscan, // Utilisez l'image importée ici
    title: 'BodyScan',
    description: 'Application mobile de suivi de performances sportives',
    tools: 'NextJS, MongoDB, TailwindCSS, Vercel, PWA',

  }
  // Ajoutez d'autres projets ici
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold my-16 ">Mes projets</h2>
      
      <div className='flex flex-col gap-12'>{projects.map((project, index) => (
        <Project
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          tools={project.tools}
        />
      ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
