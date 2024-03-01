import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarEx from './components/Navbar';
import Welcome from './Welcome.jpg';
import AboutMe from './components/AboutMe';
import Academics from './components/Academics';
import Projects from './components/Projects';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const [contact, setContact] = useState(false);

  const ContactDetails = () => {
    setContact(!contact);
  };

  const ContactInfo = (
    <ul className="list-group">
      <li className="list-group-item">
        <FontAwesomeIcon icon={faMobile} />
        PhoneNumber: +1(479)8660883
      </li>

      <li className="list-group-item">
        <FontAwesomeIcon icon={faEnvelope} />
        Gmail: saijaswanth52@gmail.com
      </li>

      <li className="list-group-item">
        <FontAwesomeIcon icon={faLinkedin} />
        Linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/suraneni-sai-jaswanth-ab31131b1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sai Jaswanth Suraneni
        </a>
      </li>
      <li className="list-group-item">
        <FontAwesomeIcon icon={faAddressBook} />
        Address: OverlandPark-Kansas.
      </li>
    </ul>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>
            Hi, I am{" "}
            <span style={{ color: "Red", fontSize: "30px", fontStyle: "italic" }}>
              <u>'SaiJaswanthSuraneni'</u>
            </span>{" "}
            Welcome to my Portfolio...
          </p>
          <div className="m-3 p-2">
            <b className="text-info">
              <u>Contact Information</u>
            </b>
            <button className="btn btn-link" onClick={ContactDetails}>
              {contact ? "Hide Contact" : "Show Contact"}
            </button>
            {contact && ContactInfo}
          </div>
        </div>
        <div className="col-md-6">
          <img src={Welcome} alt="image" className="Welcome mt-1"></img>{" "}
        </div>
      </div>
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
            <Route path="/Academics" element={<Academics />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
