// import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          {/* left-side heading-content */}
          <div className="heading-content">
            <h2>
              Hello, I am{" "}
              <span>
                <strong>Thapelo Nobatana.</strong>
              </span>
              <br />
              <strong>A Frontend Engineer</strong>
              <br />
              based in <strong>South Africa.</strong>
            </h2>
            <p>
              A Frontend Software Engineer who loves turning ideas into sleek,
              user-friendly web experiences. I work mostly with React.js,
              TailwindCSS, and Figma for UI/UX design, always aiming to make
              things faster, smoother, and more enjoyable to use. Whether it’s
              refining a layout or polishing a pixel, I’m all about creating
              digital experiences that feel just right.
            </p>
            <div className="icons">
              <div className="icon">
                <FaGithub size={30} />
              </div>
              <div className="icon">
                <FaLinkedin size={30} />
              </div>
              <div className="icon">
                <IoLogoWhatsapp size={30} />
              </div>
              <div className="icon">
                <FaDiscord size={30} />
              </div>
            </div>
          </div>
          {/* right-side Portraite-image */}

          <img className="image" src="./public/Thapelo_Face.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
