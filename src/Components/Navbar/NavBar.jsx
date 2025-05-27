// import React from "react";
import "./NavBar.css";
import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="content">
            <a href="/" className="logo">
              <img src="./public/Logo.PNG" alt="Logo" /> Thapelo Nobatana
            </a>
            <nav className="links">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#about-me">About me</a>
                </li>
                <li>
                  <a href="#project">Projects</a>
                </li>
              </ul>
            </nav>
            <div className={!nav ? "links" : "mobile-links"} hidden>
              <nav className="mobile-links">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#about-me">About Me</a>
                  </li>
                  <li>
                    <a href="#project">Projects</a>
                  </li>
                </ul>
              </nav>
            </div>
            <button className="resume-btn">Resume</button>
            <TbMenu2
              size={30}
              className="menu-icon"
              color="#000000"
              onClick={handleNav}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
