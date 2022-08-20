import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../images/McMahon-Group-Australia.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <div className='Header'>
      {/* TOP ADDRESS NAV BAR */}
      <div className='header-1'>
        <div className='inner-header-1'>
          <div className='header-1-text'>
            <i className='icon fa-solid fa-location-dot'></i> Melbourne,Victoria
            Australia
          </div>
          <div className='header-1-text'>
            <i className='icon fa-regular fa-clock'></i> Monday-Friday 9am-5pm
          </div>
          <div className='header-1-text'>
            <i className='icon fa-solid fa-phone-flip'></i> 1300 85 16 17
          </div>
        </div>
        <div className='inner-header-2'>
          <i className='icon fa-brands fa-instagram'></i>
          <i className='icon fa-brands fa-facebook-f'></i>
        </div>
      </div>
      <div className='navbar'>
        <Navbar variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand href='#home'>
              <div className='logo'>
                <img src={pic1} />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='navbar-1'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link href='#link'>About US</Nav.Link>
                <NavDropdown.Divider />
                <NavDropdown title='Company' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>
                    Operation Structure
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.2'>
                    Solutions Management
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.3'>Safety</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Terms And Conditions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Privacy Policy
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title='Services' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>
                    Electrial
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.2'>
                    Security
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.3'>
                    Air Conditioning and Heating
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Hazardous Areas
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Renewable Energy
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#home'>Projects</Nav.Link>
                <Nav.Link href='#home'>Career</Nav.Link>
                <Nav.Link href='#home'>Interest Free</Nav.Link>
                <Nav.Link href='#home'>Contact US</Nav.Link>
                <Nav.Link href='#home'>Get a Free Quote</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
