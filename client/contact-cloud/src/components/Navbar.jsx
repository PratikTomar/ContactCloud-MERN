import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const name = localStorage.getItem("name");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("name");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <h1 className="logo">ContactCloud</h1>
      </Link>

      <ul className="nav-links">
        {!isLoggedIn && (
          <>
            <Link to="/signin" className="nav-link">
              <li>Signin</li>
            </Link>
            <Link to="/signup" className="nav-link">
              <li>Signup</li>
            </Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <strong>Hi, {name}</strong>
            <Link to="contact" className="nav-link">
              <li>Add Contact</li>
            </Link>
            <Link to="/dashboard" className="nav-link">
              <li>Dashboard</li>
            </Link>
            <Link to="/signin" onClick={logoutHandler} className="nav-link">
              <li>Logout</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
