import {React,Component} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
 import photo from '../DP.jpg';
 import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
 import AboutMe from './AboutMe';
 import Academics from './Academics';
 import Projects from './Projects';


export default function NavbarEx() {
  return (
    
    <div>
      <Navbar class="navbar-expand-lg" fixed ="top" bg="secondary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/"><img src={photo} alt="DP" 
          style={{ width: '100px', height: '100px', borderRadius: '50%'  }}></img></Navbar.Brand>
          
          <Nav className="ml-auto">
            
            <Nav.Link as={Link} to={"/AboutMe"}>AboutMe</Nav.Link>
            <Nav.Link  as={Link} to={"/Academics"}>Carrear</Nav.Link>
            <Nav.Link  as={Link} to={"/Projects"}>Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    
  )
}
