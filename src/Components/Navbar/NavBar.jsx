// import React from "react";
import "./NavBar.css";
import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
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
            <a href="#hero" className="logo">
              <img src="/Logo.PNG" alt="Logo" />{" "}
              <span>
                <strong>Thapelo Nobatana</strong>
              </span>
            </a>
            <nav className="links">
              <ul>
                <li>
                  <a href="#about-me">About me</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div className={!nav ? "links" : "mobile-links"} hidden>
              <nav className="mobile-links">
                <ul>
                  <li>
                    <a href="#about-me">About Me</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <button className="resume-btn">
              <a href="/resume_thapelo_nobatana.pdf" download>
                Resume <FaDownload color="#ffffff" width={50} />{" "}
              </a>
            </button>
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
