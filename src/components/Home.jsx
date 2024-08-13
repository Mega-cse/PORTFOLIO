// src/components/Home.js

import {useEffect} from 'react';
import Typed from 'typed.js';

const Home = () => {
    useEffect(() => {
        // Initialize Typed.js
        const typed = new Typed(".text", {
          strings: ["Full stack developer","Front end developer", "Fresher"],
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
          passionate in <span className="text"></span>
        </h4>
        <div className="img">
          <img src="https://img.freepik.com/free-photo/3d-portrait-people_23-2150793856.jpg?t=st=1723549872~exp=1723553472~hmac=1e56962372010a48c950c67a8ab9424eeb81837d829e50e0d0cde5aa38a079f7&w=826" alt="Megavardhini" className="responsive" />
        </div>
        <div className="home-sci">
          <a href="https://www.linkedin.com/in/megavardhini-p/" style={{ '--i': 7 }} target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/Mega-cse" style={{ '--i': 10 }} target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          
        </div>
        <a href="https://drive.google.com/file/d/1X_nsMlvJEu39X-214Ig-EALMMHrzGySv/view?usp=drivesdk" style={{ '--i': 11 }} className="btn-box" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
    </section>
  );
};

export default Home;
