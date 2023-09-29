import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className=''>
      <Navbar expand="lg" className="bg-dark  fixed-top">
        <Container>
          <Navbar.Brand href="/">
            <h2 className='text-white fw-bold'>
              <i className="bi bi-paint-bucket"></i> Color's Picker
            </h2>
          </Navbar.Brand>

          {/* Add a custom class to Navbar.Toggle */}
          <Navbar.Toggle
            className="custom-toggler"
            aria-controls="basic-navbar-nav bg-white"
          />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/">
                <i className="bi bi-house-door text-white"></i>{' '}
                <span className='text-white fw-bold'>Home</span>
              </Nav.Link>
              <Nav.Link href="/Photos">
                <i className="bi bi-list-check text-white "></i>
                <span className='text-white fw-bold '>Color List</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
