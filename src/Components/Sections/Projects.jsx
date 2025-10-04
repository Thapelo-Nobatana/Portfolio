// import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="content">
          <div className="top-heading">
            <h2>
              my <strong>Projects</strong>
            </h2>
          </div>
          <div className="projects-wrapper">
            <div className="project-wrapper">
              {/* project 01 */}
              <img src="/little-lemon.png" alt="project-image" width={400} />
              <div className="heading-wrapper">
                <h1>01</h1>
                <h2>Little Lemon Food restaurant App</h2>
                <p>
                  Little Lemon is a modern restaurant web app that makes dining
                  effortless and enjoyable. Designed with React, the app allows
                  users to book tables with ease, browse the menu, and place
                  online orders—all from a clean, responsive interface. Built
                  for convenience, Little Lemon streamlines the restaurant
                  experience with user-friendly booking forms, dynamic menu
                  rendering, and smooth navigation. Whether you're planning a
                  night out or ordering your favorite dishes from home, Little
                  Lemon delivers speed, simplicity, and style.
                </p>
                <div className="git-wrapper">
                  <a href="https://little-lemon-web.onrender.com">
                    <FaExternalLinkAlt width={100} />
                  </a>

                  <a href="https://github.com/Thapelo-Nobatana/Little-Lemon-web.git">
                    {" "}
                    git <FaGithub color="#ffffff" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              {/* project 02 */}
              <img src="/Custome.png" alt="project-image" width={400} />
              <div className="heading-wrapper">
                <h1>02</h1>
                <h2>Costume House Gallery App</h2>
                <p>
                  An interactive e-commerce product catalog built with Next.js,
                  TypeScript, Redux Toolkit, and Tailwind CSS. Users can
                  seamlessly browse, filter, sort, and explore products with
                  smooth pagination and infinite scrolling.
                </p>
                <div className="git-wrapper">
                  <a href=" https://alx-project-nexus-mocha.vercel.app/">
                    <FaExternalLinkAlt />
                  </a>

                  <a href="https://github.com/Thapelo-Nobatana/alx-project-nexus.git">
                    {" "}
                    git <FaGithub color="#ffffff" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              {/* project 03 */}
              <img src="/GenAI.png" width={400} alt="project-image" />
              <div className="heading-wrapper">
                <h1>03</h1>
                <h2>ImageGen – AI-Powered Image Generation Web App</h2>
                <p>
                  ImageGen is an intuitive web application that allows users to
                  generate stunning, AI-powered images directly from textual
                  prompts. Leveraging modern AI image generation APIs, ImageGen
                  transforms user descriptions into visually captivating images
                  in seconds, making it perfect for designers, content creators,
                  and anyone looking to bring their ideas to life visually.
                </p>
                <div className="git-wrapper">
                  <a href="alx-project-0x05-setup-git-main-thapelo-nobatanas-projects.vercel.app">
                    <FaExternalLinkAlt />
                  </a>

                  <a href="https://github.com/Thapelo-Nobatana/alx-project-0x05-setup.git">
                    {" "}
                    git <FaGithub color="#ffffff" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
