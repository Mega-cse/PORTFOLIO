import React from 'react';
const Skills = () => {
  return (
    <section id="Skills">
      <h1 className="subtitle">My <span>Skills</span></h1>
      <div className="sec">
        <div className="container1">
          <h1 className="heading1">Technologies</h1>
          <div className="Technical-bars">
            <div className="bar"><i className='bx bxl-html5' style={{ color: '#c9332e' }}></i>
              <div className="info">
                <span>HTML <span className="addhtml"></span></span>
              </div>
              <div className="progress-line html">
                <span></span>
              </div>
            </div>
            <div className="bar"><i className='bx bxl-css3' style={{ color: '#147bbc' }}></i>
              <div className="info">
                <span>CSS <span className="addcss"></span></span>
              </div>
              <div className="progress-line css">
                <span></span>
              </div>
            </div>
     
            <div className="bar"><i className='bx bxl-javascript' style={{ color: '#c95d2e' }}></i>
              <div className="info">
                <span>JavaScript <span className="addjavascript"></span></span>
              </div>
              <div className="progress-line javascript">
                <span></span>
              </div>
            </div>
            
            <div className="bar"><i className='bx bxl-react' style={{ color: '#c95d2e' }}></i>
              <div className="info">
                <span>React<span className="addreact"></span></span>
              </div>
              <div className="progress-line react">
                <span></span>
              </div>
            </div>

          </div>
        </div>

        <div className="container2">
          <h1 className="heading1">Professional Skills</h1>
          <div className="radial-bars">
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="80" r="80"></circle>
                <circle className="path path-1" cx="100" cy="80" r="80"></circle>
              </svg>
              <div className="percentage">60%</div>
              <div className="text">Problem Solving</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="80" r="80"></circle>
                <circle className="path path-2" cx="100" cy="80" r="80"></circle>
              </svg>
              <div className="percentage">70%</div>
              <div className="text">Creativity</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="80" r="80"></circle>
                <circle className="path path-3" cx="100" cy="80" r="80"></circle>
              </svg>
              <div className="percentage">80%</div>
              <div className="text">Communication</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="80" r="80"></circle>
                <circle className="path path-4" cx="100" cy="80" r="80"></circle>
              </svg>
              <div className="percentage">90%</div>
              <div className="text">Teamwork</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
