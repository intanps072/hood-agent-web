import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Form, InputGroup } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/LOGO.png";
import loginIcon from "../assets/Icons/Login.png";
import searchIcon from "../assets/Icons/Search.png";
import "../style/Navbar.css";

function AppNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      // Arahkan ke halaman pencarian CRUD dengan query
      navigate(`/CrudSearch?query=${encodeURIComponent(searchValue)}`);
    }
    setShowSearch(false);
    setSearchValue("");
  };

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
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            <Nav.Link
              as={NavLink}
              to="/OurStory"
              className="me-4 nav-item-link"
              style={{ color: "white" }}
            >
              Our Story
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/Catalog"
              className="me-4 nav-item-link"
              style={{ color: "white" }}
            >
              Catalog
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/Event"
              className="me-4 nav-item-link"
              style={{ color: "white" }}
            >
              Event
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/Divisions"
              className="nav-item-link"
              style={{ color: "white" }}
            >
              Division
            </Nav.Link>
          </Nav>

          {/* Tombol kanan */}
          <div className="d-flex align-items-center position-relative">
            {/* Search Button */}
            <button
              className="btn p-0 me-3"
              onClick={handleSearchClick}
              style={{ background: "none", border: "none" }}
            >
              <img
                src={searchIcon}
                alt="Search"
                height="25"
                style={{ cursor: "pointer" }}
              />
            </button>

            {/* Kolom Search (muncul saat klik icon) */}
            {showSearch && (
              <Form
                onSubmit={handleSearchSubmit}
                className="position-absolute"
                style={{
                  top: "40px",
                  right: "60px",
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: "8px",
                  padding: "5px 10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  zIndex: 1000,
                  width: "220px",
                }}
              >
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Cari produk..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="btn btn-light"
                    style={{ backgroundColor : "orange", border: "none" }}
                  >
                    <img
                      src={searchIcon}
                      alt="Go"
                      height="20"
                      style={{ opacity: 0.8 }}
                    />
                  </button>
                </InputGroup>
              </Form>
            )}

            {/* Login Button */}
            <NavLink to="/Login" className="login-btn me-3">
              <img
                src={loginIcon}
                alt="Login"
                height="25"
                className="d-inline-block align-top"
              />
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
