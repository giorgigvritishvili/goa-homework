import React from 'react';
import './Projects.css'; 
import SkillCircle from "./SkillCircle";

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and CSS.',
    technologies: ['React', 'CSS', 'JavaScript'],
  },
  {
    title: 'Task Management App',
    description: 'A task management app with login and CRUD operations.',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'E-commerce Store',
    description: 'An e-commerce store with product listing and checkout functionality.',
    technologies: ['React', 'Redux', 'Node.js'],
  },
  {
    title: 'hotel',
    description: 'I created a website that is very cheap prices.',
    technologies: ['React', 'Redux', 'Node.js'],
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <SkillCircle />
      <center>
         <h2>My Projects</h2>
      </center>
     
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
