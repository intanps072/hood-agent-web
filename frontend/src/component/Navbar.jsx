import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar  className="shadow-sm" expand="lg" fixed="top" style={{ backgroundColor: "#CB3B0F" }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
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
          <Nav className="me-auto mx-auto" style={{ fontWeight: 'bold', fontSize: '18px' }}>
            <Nav.Link href="#" style={{color: "white"}} className="me-4" >Our Story</Nav.Link>
            <Nav.Link href="#" style={{color: "white"}} className="me-4" >Catalog</Nav.Link>
            <Nav.Link href="#" style={{color: "white"}} className="me-4" >Generations</Nav.Link>
            <Nav.Link href="#" style={{color: "white"}} > Divisions</Nav.Link>
          </Nav>

          {/* Button kanan */}
            <div className="d-flex">
              {/* Login: putih outline hitam */}
              <Button variant="outline-dark" className="me-2">
                Login
              </Button>

              {/* Sign-up: hitam solid */}
              <Button variant="dark">
                Sign-up
              </Button>
            </div>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
