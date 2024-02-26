import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarEx from './components/Navbar';
import Welcome from './Welcome.jpg';
import AboutMe from './components/AboutMe';
import Academics from './components/Academics';
import Projects from './components/Projects';
import './App.css';

function Home() {
  return (
    // <div className="d-flex align-items-center flex-row bg-color m-5">
    <div >
      <div><p>
        Hi, I am <span style={{ color: "Red", fontSize: "30px", fontStyle: "italic" }}><u>'SaiJaswanthSuraneni'</u></span> Welcome to my Portfolio...</p>
      </div>
      <div><img src={Welcome} alt="image" className="Welcome" ></img> </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App" style={{ paddingTop: '70px' }}>
        <header className="App-header">
          <NavbarEx />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutme" element={<AboutMe />} />
            <Route path="/Academics" element={<Academics/>} />
            <Route path="/Projects" element ={<Projects/>}></Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
