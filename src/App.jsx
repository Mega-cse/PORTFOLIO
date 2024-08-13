import React  from 'react'
import {BrowserRouter,Routes,Route, Link}from 'react-router-dom';
import './App.css'
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
    <>
<BrowserRouter>
<header className="header">
      <Link to="/" className="logo">Portfolio</Link>
        <nav className="navbar" id="myLinks">
          <Link to="/" className="active">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main>
<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/skills' element={<Skills/>}/>
   <Route path='/projects' element={<Projects/>}/>
  <Route path='/contact' element={<Contact/>}/>

</Routes>
</main>
<footer className="last-text">
        <p>Developed by Megavardhini <i className='bx bx-copyright' style={{ color: 'white' }}></i> 2024</p>
      </footer>
      <a href="#Home" className="top"><i className='bx bx-up-arrow-alt'></i></a>
   
</BrowserRouter>

 
  

    </>
  );
}

export default App;
