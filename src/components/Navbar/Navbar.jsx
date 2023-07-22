import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            style={({ isActive }) => ({ color: isActive && "red" })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            styleName={({ isActive }) => ({ color: isActive && "red" })}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            styleName={({ isActive }) => ({ color: isActive && "red" })}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            styleName={({ isActive }) => ({ color: isActive && "red" })}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
