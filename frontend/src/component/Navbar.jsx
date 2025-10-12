import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import logo from "../assets/LOGO.png"; 
import "../style/Navbar.css";

function AppNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`shadow-sm transition-all ${
        isScrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
    >

      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
              src={logo}  
              alt="Logo"
              width="auto"        
              height="55"       
              className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu tengah */}
          <Nav 
            className="me-auto mx-auto" 
            variant="pills" 
            style={{ fontWeight: 'bold', fontSize: '18px'}}
          >
            
            <Nav.Link as={NavLink} to='/OurStory' className="me-4 nav-item-link" 
              defaultActiveKey="/OurStory"  style={{color: "white"}} >
                Our Story</Nav.Link>

            <Nav.Link as={NavLink} to='/Catalog' className="me-4 nav-item-link"
              defaultActiveKey="/Catalog" style={{color: "white"}} >
                Catalog</Nav.Link>

            <Nav.Link as={NavLink} to='/Event' className="me-4 nav-item-link"
              defaultActiveKey="/Event" style={{color: "white"}} >
                Event</Nav.Link>
                
            <Nav.Link as={NavLink} to='/Divisions'
            className = "nav-item-link" 
              defaultActiveKey="/Divisions" style={{color: "white"}} >
                Division</Nav.Link>
          </Nav>

             {/* Button kanan */}
          <div className="d-flex align-items-center">
            {/* 🔸 Ikon Login */}
            <NavLink to="/Login" className="login-icon me-3">
              <FaSignInAlt size={24} />
            </NavLink>

            {/* 🔸 Tombol Sign-up */}
            <Button variant="light">
              <NavLink
                to="/Signup"
                style={{ textDecoration: "none", color: "black" }}
              >
                Sign-up
              </NavLink>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
