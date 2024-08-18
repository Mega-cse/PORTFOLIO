import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div id="portfolio" className="services">
        <div className="main-text" id="serv">
          <h2>My <span>Projects</span></h2>
          <div className="serv-container">
            {projects.map((project, index) => (
              <div className="card" key={index}>
                <img src={project.image} alt={project.title} className="card-img" />
                <div className="card-overlay">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-description">{project.description}</p>
                  <div className="card-links">
                    <a href={project.github} className="card-link" target="_blank" rel="noopener noreferrer">
                      <i className='bx bxl-github'></i> GitHub
                    </a>
                    <a href={project.netlify} className="card-link" target="_blank" rel="noopener noreferrer">
                      <i className='bx bx-link'></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Sample project data
const projects = [
  {
    title: 'E-commerce',
    image: '/img/img1.jpg', // Adjusted path
    description: 'A fully-featured eCommerce website built with React, designed to provide an engaging shopping experience. This project includes components for product listing, cart management, user registration, and a secure checkout process. It integrates responsive design to ensure compatibility across various devices and screen sizes.',
    github: 'https://github.com/Mega-cse/E-commerce-project.git',
    netlify: 'https://stately-gumdrop-949f2b.netlify.app/'
  },
  {
    title: 'Loreum',
    image: '/img/white.jpg', // Adjusted path
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit porro deleniti sint aliquid eligendi ex soluta quia consequatur, facere non, fugiat cupiditate distinctio saepe recusandae pariatur iusto illum voluptatum sequi?',
    github: 'https://github.com/yourusername/drowsiness-detection',
    netlify: 'https://yourproject.netlify.app'
  },
  {
    title: 'Loreum',
    image: '/img/white.jpg', // Adjusted path
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas autem deleniti. Labore pariatur sit culpa obcaecati, ut cumque, impedit odio sint nam soluta minima recusandae libero magnam delectus similique.',
    github: 'https://github.com/yourusername/desktop-application',
    netlify: 'https://yourproject.netlify.app'
  }
];

export default Projects;
