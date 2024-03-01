import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import photo from '../DP.jpg';
import { Link } from 'react-router-dom';

export default function NavbarEx() {
  return (
    <Navbar expand="lg" fixed="top" bg="dark" variant="dark" style={{ padding: '3px' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'pink', fontSize: '3.2rem' }}>
          <img
            src={photo}
            alt="DP"
            style={{ width: '90px', height: '90px', borderRadius: '50%' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/AboutMe" style={{ color: 'pink', fontSize: '1.5rem' }}>
              AboutMe
            </Nav.Link>
            <Nav.Link as={Link} to="/Academics" style={{ color: 'pink', fontSize: '1.5rem' }}>
              Career
            </Nav.Link>
            <Nav.Link as={Link} to="/Projects" style={{ color: 'pink', fontSize: '1.5rem' }}>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
