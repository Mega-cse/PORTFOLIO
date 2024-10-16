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
    github: 'https://github.com/Mega-cse/ecommerce-frontend.git',
    netlify: 'https://preeminent-kataifi-17fd00.netlify.app/'
  },
  {
    title: 'Health & Wellness',
    image: '/img/image1.jpg', // Adjusted path
    description: 'This Health and Wellness App is designed to enhance user well-being through fitness tracking, nutrition planning, and mental health support. Built with the MERN stack, it allows users to log exercises, track their meals, and set personalized health goals. The app features secure user registration and provides visual progress indicators, empowering users to take charge of their health journey. Explore the project and join the path to holistic wellness!',
    github: 'https://github.com/Mega-cse/Health-Wellness-FE.git',
    netlify: 'https://phenomenal-flan-fef4f3.netlify.app/'
  },
  {
    title: 'Travel World',
    image: '/img/img2.jpg', // Adjusted path
    description: 'This travel booking website allows users to explore and book various travel destinations seamlessly. Featuring user authentication with login, registration, and password management, it offers an intuitive booking form and secure payment processing via Stripe. Users receive confirmation emails after successful bookings, ensuring a smooth travel experience.',
    github: 'https://github.com/Mega-cse/Travel-Frontend.git',
    netlify: 'https://heroic-lebkuchen-8664c2.netlify.app/'
  },

];

export default Projects;
