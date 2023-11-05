import { useState } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "../pages/style.css";

import Cv from '../assets/curriculo.pdf'

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Navbar.Brand className="logotext" as={Link} to="/">
      
        <div className="logo"></div>
        
      </Navbar.Brand>
      <div className="d-flex align-items-center ml-4">
          
            <Link to="/" className="navtext">
                <h3>TH</h3>
            </Link>
            <Link to="/" className="navtext2">
                <h3>Fields</h3>
            </Link>
      </div>
      <Navbar.Toggle
        className="navbar-toggler"
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
        <Nav className="ms-auto" defaultActiveKey="#home">
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/"
              onClick={() => updateExpanded(false)}
            >
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              Sobre
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              Projetos
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/contact"
              onClick={() => updateExpanded(false)}
            >
              Contato
            </NavLink>
          </Nav.Item>

          
          <Button
            onClick={() => {
              window.open(
               Cv,
                "_black"
              );
            }}
            className="resumebtn"
          >
            <span>Currículo</span>
          </Button>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;