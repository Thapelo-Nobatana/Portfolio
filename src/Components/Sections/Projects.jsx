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
              <img src="" alt="project-image" />
              <div className="heading-wrapper">
                <h1>01</h1>
                <h2>BiteSwift Food Delivery App</h2>
                <p>
                  BiteSwift is a modern food delivery app that connects users
                  with their favorite restaurants for quick, easy, and seamless
                  food ordering. Built with React, Node.js, Express, and
                  MongoDB, the app ensures a smooth user experience with
                  real-time tracking, secure payments, and personalized
                  recommendations.
                </p>
                <div className="git-wrapper">
                  <FaExternalLinkAlt />

                  <a>
                    {" "}
                    git <FaGithub color="#ffffff" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              {/* project 02 */}
              <img src="" alt="project-image" />
              <div className="heading-wrapper">
                <h1>01</h1>
                <h2>BiteSwift Food Delivery App</h2>
                <p>
                  BiteSwift is a modern food delivery app that connects users
                  with their favorite restaurants for quick, easy, and seamless
                  food ordering. Built with React, Node.js, Express, and
                  MongoDB, the app ensures a smooth user experience with
                  real-time tracking, secure payments, and personalized
                  recommendations.
                </p>
                <div className="git-wrapper">
                  <FaExternalLinkAlt />

                  <a>
                    {" "}
                    git <FaGithub color="#ffffff" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              {/* project 03 */}
              <img src="" alt="project-image" />
              <div className="heading-wrapper">
                <h1>01</h1>
                <h2>BiteSwift Food Delivery App</h2>
                <p>
                  BiteSwift is a modern food delivery app that connects users
                  with their favorite restaurants for quick, easy, and seamless
                  food ordering. Built with React, Node.js, Express, and
                  MongoDB, the app ensures a smooth user experience with
                  real-time tracking, secure payments, and personalized
                  recommendations.
                </p>
                <div className="git-wrapper">
                  <FaExternalLinkAlt />

                  <a>
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
