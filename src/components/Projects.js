import React from 'react';
import './styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Pneumonia detector',
      description: 'I made a pneumonia classifier during an internship for DRDO with plans to be used in Military Hospitals',
      skills: ['Django', 'REST Framework'],
    },
    {
      title: 'Aerofit and Yulu Data Analysis',
      description: 'Done this project',
      skills: ['Jupyter','Pandas', 'Numpy'],
    },
    {
      title: 'Web scrapper',
      description: 'Built a web scrapper to compare prices of products from amazon and flipkart',
      skills: ['Python', 'Beautiful Soup'],
    },
    {
      title: 'Foldable Drone',
      description: 'Built and designed a drone from scratch for National Aerospace Limited in an internship',
      skills: [ 'Java', 'SpringBoot'],
    },
  ];

  return (
    <section id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <p>Explore a selection of my recent work.</p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="skills-used">
                <ul>
                  {project.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;