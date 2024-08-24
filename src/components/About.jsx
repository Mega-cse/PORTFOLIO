// src/components/About.js

import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section id="About" className="about">
      <div className="about-img">
        <img src="./img/img.jpg" alt="About Me" className="abt-res" />
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <p className='full-width'> 
        I'm a dedicated Computer Science Engineering student
         with a strong focus on full-stack development. 
         My journey started with a passion for creating end-to-end solutions, 
         and I've since developed skills in HTML, CSS, JavaScript, and React.
        I excel at managing both front-end and back-end tasks, bringing a comprehensive approach to projects. 
        I'm now seeking roles to apply my full-stack expertise in building responsive user interfaces 
        and collaborating on dynamic projects. 
        My goal is to drive innovation and grow as a versatile developer in the tech industry.</p>
        <br />
        <a
          href="https://drive.google.com/file/d/1E0ytBZWGIlI6QLJ8F-qT5qoFtPT--d-F/view?usp=sharing"
          className="abtbtn-box"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
