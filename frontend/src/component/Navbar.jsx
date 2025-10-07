import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

function AppNavbar() {
  return (
    <Navbar  className="shadow-sm" expand="lg" fixed="top" style={{ backgroundColor: "rgba(203, 59, 15, 0.9)" }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
              src="./logo HA.png"  
              alt="Logo"
              width="50"        
              height="50"       
              className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu tengah */}
          <Nav className="me-auto mx-auto" variant="pills" style={{ fontWeight: 'bold', fontSize: '18px'}}>
            <Nav.Link as={NavLink} to='/OurStory' className="me-4"
              defaultActiveKey="/OurStory"  style={{color: "white"}} >
                Our Story</Nav.Link>

            <Nav.Link as={NavLink} to='/Catalog' className="me-4"
              defaultActiveKey="/Catalog" style={{color: "white"}} >
                Catalog</Nav.Link>

            <Nav.Link as={NavLink} to='/Event' className="me-4"
              defaultActiveKey="/Event" style={{color: "white"}} >
                Event</Nav.Link>
                
            <Nav.Link as={NavLink} to='/Divisions' 
              defaultActiveKey="/Divisions" style={{color: "white"}} >
                Divisions</Nav.Link>
          </Nav>

          {/* Button kanan */}
            <div className="d-flex">
              {/* Login: putih outline hitam */}
              <Button variant="outline-dark" className="me-2">
                <a href="/Login" style={{ textDecoration: "none", color: "black" }}>
                  Login
                </a>
              </Button>

              {/* Sign-up: hitam solid */}
              <Button variant="dark">
                <a href="/Signup" style={{ textDecoration: "none", color: "white" }}>
                  Sign-up
                </a>
              </Button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
