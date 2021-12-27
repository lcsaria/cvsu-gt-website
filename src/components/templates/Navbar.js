/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useHistory } from 'react-router-dom';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import logomini from '../../assets/logomini.png';

const Navbars = () => {

  const history = useHistory();

  const logOut = async () => {
    alert("Thank you!");
      localStorage.clear();
      history.push("/login");
  }

    return (

      <Navbar bg="white" expand="lg" sticky="top"> 
        <Container fluid>
        <Navbar.Brand href="/dashboard" className="meowlogo">
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
          <Navbar.Collapse id="basic-navbar-nav">
          <div className = "ms-auto"/>
            <Nav>   
              <Nav.Link className="d-lg-none" href="/dashboard"><i className="fas fa-home mr-3"/>Home</Nav.Link>
              <Nav.Link className="d-lg-none" href="/upload-record"><i className="fas fa-paperclip mr-3"/>Upload Record</Nav.Link>
              <Nav.Link className="d-lg-none" href="/manage-record"><i className="fas fa-table mr-3"/>Manage Record</Nav.Link>
              <NavDropdown title={<div style={{display: "inline-block"}}><i class="fas fa-user mr-2"/> {'User'}</div> } id="basic-nav-dropdown" class>
                <NavDropdown.Item href="/settings">Account Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navbars