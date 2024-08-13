// src/components/About.js

import React from 'react';
import './About.css'; // Assuming you have styles for the About component

const About = () => {
  return (
    <section id="About" className="about">
      <div className="about-img">
        {/* <img src="./img/midclg.jpeg" alt="About Me" className="abt-res" /> */}
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <p className='full-width'>I'm a dedicated and smart-working engineering student specializing in Computer Science Engineering. 
          My journey into full stack development began with a keen interest in creating end-to-end solutions. 
          I have since honed my skills in HTML, CSS, JavaScript,React, 
          and became to handling multiple tasks across both front-end and back-end development. 
          My experience in these technologies, coupled with my engineering background, allows me to approach projects with a holistic perspective.
          I am now seeking roles where I can leverage my full stack development skills, including building responsive user interfaces
          and working collaboratively on dynamic projects. 
          My goal is to contribute to innovative solutions and continue growing as a versatile developer in the tech industry.
        </p>
        <br />
        <a
          href="https://drive.google.com/file/d/1HfseGkLakywEAuuOTdnYeZCHjDjyVUY7/view?usp=sharing"
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
