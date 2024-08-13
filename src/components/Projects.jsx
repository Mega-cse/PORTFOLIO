import React from 'react';
//import './Projects.css'; // Assuming you have styles for the Projects component

const Projects = () => {
  return (
    <section id="projects">
      <div id="portfolio" className="services">
        <div className="main-text" id="serv">
          <h2>My <span>Projects</span></h2>
          {/* <div className="serv-container">
            <div className="row">
              <img src="./img/FMD.png" alt="Face Mask Detection" />
              <div className="layer">
                <h5>Face Mask Detection</h5>
                <p>Face mask of the people is detected using OpenCV and Python to find out the person without a mask.</p>
                <a href="#"><i className='bx bxs-face-mask' style={{ color: 'aliceblue' }}></i></a>
              </div>
            </div>
            <div className="row">
              <img src="./img/DD.png" alt="Drowsiness Detection" />
              <div className="layer">
                <h5>Drowsiness Detection</h5>
                <p>The face of the driver is captured and eyes are detected using OpenCV and Python. If eyes are closed, an alarm rings.</p>
                <a href="#"><i className='bx bxs-low-vision' style={{ color: 'aliceblue' }}></i></a>
              </div>
            </div>
            <div className="row">
              <img src="./img/DA.png" alt="Desktop Application" />
              <div className="layer">
                <h5>Desktop Application</h5>
                <p>A Windows application to manage staff work in the company using Python Tkinter and SQL.</p>
                <a href="#"><i className='bx bx-desktop' style={{ color: 'aliceblue' }}></i></a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
