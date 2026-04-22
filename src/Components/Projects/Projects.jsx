import React from 'react';
import './Projects.css';
import school from '../../assets/school.png';
import real from '../../assets/real.png';
import weather from '../../assets/weather.png'
import clinic from '../../assets/clinic.png'

const Projects = () => {
  const myProjects = [
    { 
      id: 1, 
      title: "Real-Estate", 
      desc: "A premium property listing platform featuring advanced search filters, map integration, and virtual tour capabilities.", 
      image: real, // Just pass the variable/path, not the <img> tag
      link: "https://real-estate-sigma-gray.vercel.app/" 
    },
    { 
      id: 2, 
      title: "CarePoint Pharmacy", 
      desc: "A custom medical inventory and pharmacy management system designed for clinic efficiency and stock tracking.", 
      image: clinic, 
      link: "https://clinic-sooty-ten.vercel.app/" 
    },
    { 
      id: 3, 
      title: "Academica School Portal", 
      desc: "A modern, responsive landing page and management suite for educational institutions, built with React and Vite.", 
      image: school, // Just pass the variable
      link: "https://school-website-eight-psi.vercel.app/" 
    },
    { 
      id: 4, 
      title: "Weather API Dashboard", 
      desc: "A real-time weather tracking application that fetches global climate data using asynchronous JavaScript and external APIs.", 
      image: weather, 
      link: "https://weatherapi-two.vercel.app/" 
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {myProjects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Use project.image here instead of the hardcoded 'school' */}
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;