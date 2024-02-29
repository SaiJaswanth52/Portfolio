import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import photo from '../DP.jpg';
import { Link } from 'react-router-dom';

export default function NavbarEx() {
  return (
    <div>
      <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{ color: 'pink' }}>
            <img
              src={photo}
              alt="DP"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
          </Navbar.Brand>

          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/AboutMe" style={{ color: 'pink' }}>
              AboutMe
            </Nav.Link>
            <Nav.Link as={Link} to="/Academics" style={{ color: 'pink' }}>
              Carrear
            </Nav.Link>
            <Nav.Link as={Link} to="/Projects" style={{ color: 'pink' }}>
              Projects
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
