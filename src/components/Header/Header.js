import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Navbar bg="transparent" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="/logo.png"
            className="d-inline-block align-top logo"
            alt="Star Wars"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/" exact>Users</NavLink>
          <NavLink to="/planets">Planets</NavLink>
          <NavLink to="/starship">Starships</NavLink>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
