import React from "react";
import logo from "../assets/images/logo1.png";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} className="logo" alt="iBloom.ai logo" />
        </Link>
      </div>
      <div className="flex-row-center">
        <button className="nav-btn login ">Login</button>
        <button className="nav-btn signup">Sign up</button>
      </div>
    </nav>
  );
}

export default Nav;
