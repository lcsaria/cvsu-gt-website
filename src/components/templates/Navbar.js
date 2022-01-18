/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Nav, Navbar, Container, /* NavDropdown */} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import logomini from '../../assets/logomini.png';

const Navbars = () => {

    return (

      <Navbar bg="white" expand="lg" sticky="top"> 
        <Container fluid>
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <div className = "ms-auto"/>
            <Nav>   
              <Nav.Link href="/"><i className="fa fa-home mr-3"/>HOME</Nav.Link>
              <Nav.Link href="/"><i className="fas fa-user mr-3"/>ADMINISTRATION</Nav.Link>
              <Nav.Link href="/"><i className="fas fa-clipboard mr-3"/>INSTRUCTION</Nav.Link>
              <Nav.Link href="/"><i className="fas fa-cog mr-3"/>SERVICES</Nav.Link>
              <Nav.Link href="/"><i className="fas fa-info-circle mr-3"/>ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navbars