/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import {Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import logomini from '../../assets/logomini.png';

const Navbars = () => {
  const [width, setWidth]   = useState(window.innerWidth);
  const navAbout = (<span><i className="fas fa-info-circle mr-3"/>ABOUT</span>)
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

    return (

      <Navbar expand="lg" sticky="top" className="navBG"> 
        <Container fluid>
        {
          width < 1000 ? 
          <Navbar.Brand href="/dashboard" className="logomeow d-lg-none">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
        </Navbar.Brand> 
          :
          <>
                  <Navbar.Brand href="/dashboard" className="meowlogo ">
          <img
            src={logomini}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />
          </Navbar.Brand> 
        <Navbar.Brand href="/dashboard" className="logomeow d-lg-none">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        </>
        }
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <div className = "ms-auto"/>
            <Nav>   
              <Nav.Link href="/"><span><i className="fas fa-home mr-3"/>HOME</span></Nav.Link>
              <Nav.Link href="/"><span><i className="fas fa-user mr-3"/>ADMINISTRATION</span></Nav.Link>
              <Nav.Link href="/"><span><i className="fas fa-clipboard mr-3"/>INSTRUCTION</span></Nav.Link>
              <Nav.Link href="/"><span><i className="fas fa-cog mr-3"/>SERVICES</span></Nav.Link>
              <NavDropdown title={navAbout} id="basic-nav-dropdown">
              <NavDropdown.Item  flip href="/history">CAMPUS HISTORY</NavDropdown.Item>
                <NavDropdown.Item  flip href="/vision-mission-goals">VISION, MISSION, AND GOALS</NavDropdown.Item>
                <NavDropdown.Item  flip href="/university-seal">UNIVERSITY SEAL AND HYMN</NavDropdown.Item>
                <NavDropdown.Item  flip href="/contact-information">CONTACT INFORMATION</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navbars