import React from 'react';
import Project from './projectsfolio'; // Assurez-vous que le chemin est correct

const projects = [
  {
    image: "/public/BodyScanIcon.png", // Assurez-vous que le chemin est correct, par exemple "public/images/project1.jpg
    title: 'Project 1',
    description: 'Description of project 1.',
  },

  // Ajoutez d'autres projets ici
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center my-16">My Projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
