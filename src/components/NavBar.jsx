import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.jpeg";
import "../styles/NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link to="/">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Contact</Link>
          </li>
        </ul>
        {/* for ui between desktop/mobile views
        reveals nav menu when clicked in mobile version */}
        <div className="menu-btn" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
