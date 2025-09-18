// import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="container">
        <div className="content">
          {/* left-side heading-content */}
          <div className="heading-content">
            <h3>
              Hello, I am{" "}
              <span>
                <strong>Thapelo Nobatana.</strong>
              </span>
              <br />
              <strong>A Frontend Engineer</strong>
              <br />
              based in <strong>South Africa.</strong>
            </h3>
            <p>
              A Frontend Software Engineer who loves turning ideas into sleek,
              user-friendly web experiences. I work mostly with React.js,
              TailwindCSS, and Figma for UI/UX design, always aiming to make
              things faster, smoother, and more enjoyable to use. Whether it’s
              refining a layout or polishing a pixel, I’m all about creating
              digital experiences that feel just right.
            </p>
            <div className="icons">
              <button className="icon">
                <a href="https://github.com/Thapelo-Nobatana">
                  <FaGithub size={30} />
                </a>
              </button>
              <button className="icon">
                <a href="https://www.linkedin.com/in/thapelo-nobatana-549329339/">
                  <FaLinkedin size={30} />
                </a>
              </button>
              <button className="icon">
                <a href="https://wa.me/27815146476" target="_blank">
                  <IoLogoWhatsapp size={30} />
                </a>
              </button>
              <button className="icon">
                <a href="https://discord.gg/TvWtkK7a">
                  <FaDiscord size={30} />
                </a>
              </button>
            </div>
          </div>
          {/* right-side Portraite-image */}

          <img className="image" src="/Thapelo_Face.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
