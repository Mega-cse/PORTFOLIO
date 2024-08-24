// src/components/Home.js

import {useEffect} from 'react';
import Typed from 'typed.js';

const Home = () => {
    useEffect(() => {
        // Initialize Typed.js
        const typed = new Typed(".text", {
          strings: ["Full stack developement","Front end developement", "and am a Fresher"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true
        });
    
     
        const handleScroll = () => {
          const toTop = document.querySelector(".top");
          if (window.pageYOffset > 100) {
            toTop.classList.add("active");
          } else {
            toTop.classList.remove("active");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
          typed.destroy(); // Cleanup Typed.js instance
        };
      }, []);
    
  return (
       <section id="Home" className="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>MEGAVARDHINI P</h1>
        <h4 style={{ '--i': 6 }}>
          
          I'm an Engineering student who is<br />
          passionate about <span className="text"></span>
        </h4>
        <div className="img">
          <img src="https://img.freepik.com/premium-photo/3d-illustration-cute-cartoon-girl-with-laptop-computer_1057-38496.jpg" alt="Megavardhini" className="responsive" />
        </div>
        <div className="home-sci">
          <a href="https://www.linkedin.com/in/megavardhini-p/" style={{ '--i': 7 }} target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/Mega-cse" style={{ '--i': 10 }} target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          
        </div>
        <a href="https://drive.google.com/file/d/1E0ytBZWGIlI6QLJ8F-qT5qoFtPT--d-F/view?usp=sharing" style={{ '--i': 11 }} className="btn-box" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
      
    </section>
    
  );
};

export default Home;
