// src/components/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <section  id="contact"className="contacts">
      <div className="contact-text">
        <h2>Contact <span>Me</span></h2>
        <h4>Let's Work Together</h4>
        <div className="contact-list">
        <li><i className='bx bxs-send'></i><a href="mailto:pmegavardhini@gmail.com">pmegavardhini@gmail.com</a></li>        
         <li><i className="bx bxs-phone-call"></i>7200810835</li>
        </div>
        <div className="contact-icons">
          <a href="https://github.com/Mega-cse" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/megavardhini-p/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
