import { useEffect } from 'react';
import Typed from 'typed.js';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
    useEffect(() => {
        // Initialize Typed.js
        const typed = new Typed(".text", {
            strings: ["Full stack development", "Front end development", "and I am a Fresher"],
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
        <div>
            <section id="Home" className="home">
                <div className="home-content">
                    <h3>Hello, It's Me</h3>
                    <h1>MEGAVARDHINI P</h1>
                    <h4 style={{ '--i': 6 }}>
                        I'm an Engineering student who is<br />
                        passionate about <span className="text"></span>
                    </h4>
                    <div className="img">
                        <img src="https://img.freepik.com/premium-photo/working-girl-office-work-animated-girl-working-laptop_982269-329.jpg" alt="Megavardhini" className="responsive" />
                    </div>
                    <div className="home-sci">
                        <a href="https://www.linkedin.com/in/megavardhini-p/" style={{ '--i': 7 }} target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://github.com/Mega-cse" style={{ '--i': 10 }} target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                    </div>
                    <a href="https://drive.google.com/file/d/1PGe6l5z8Rnmv0GYZrT7s-btaacLsiSG2/view?usp=sharing" style={{ '--i': 11 }} className="btn-box" target="_blank" rel="noopener noreferrer">Download Resume</a>
                </div>
            </section>
            <section id="About"><About /></section>
            <section id="Projects"><Projects /></section>
            <section id="Skills"><Skills /></section>
            <section id="Contact"><Contact /></section>
        </div>
    );
};

export default Home;
