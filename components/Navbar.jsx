import React from "react";
import "../css/navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent slide-in-right">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item second">
              <a className="nav-link  hover-underline-animation" href="#intro">
                Home
              </a>
            </li>
            <li className="nav-item second">
              <a className="nav-link hover-underline-animation" href="#about">
                About
              </a>
            </li>
            <li className="nav-item second">
              <a className="nav-link hover-underline-animation" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item second">
              <a className="nav-link hover-underline-animation" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
