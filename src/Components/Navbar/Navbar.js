import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CgDarkMode } from 'react-icons/cg';
import './Navbar.css';

const NavbarBar = () => {
  return (
    <>
       <div className="container-fluid">
       <Navbar  expand="lg" className='navigation_wrap'>
      <Container fluid >
        <Navbar.Brand href="#"> <strong>P</strong>rotibeshi</Navbar.Brand>
        <Navbar.Toggle className='nav_togg' aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll" >
       
          <Nav
            className=" ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='Nav_link' href="#action1">Home</Nav.Link>
            <NavDropdown className='Nav_link' title="Barnch" id="navbarScrollingDropdown">
                
              <NavDropdown.Item  href="#action4">Mirpur</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Kolabagan</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Dhanmondi</NavDropdown.Item>              
            </NavDropdown>
            <Nav.Link className='Nav_link' href="#action2">About</Nav.Link>
            <Nav.Link className='Nav_link' href="#action3">Contact</Nav.Link>
            <Nav.Link className='Nav_link' href="#action7"><CgDarkMode/></Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </div>
    </>
  );
};

export default NavbarBar;