// import React from 'react'
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <div className="container">
        <div className="content">
          <div className="experience-heading">
            <h2>
              my <strong>Experience</strong>
            </h2>
          </div>
          <div className="card-wrapper">
            <div className="experience-card">
              <div className="card-heading">
                <div className="image">
                  <img src="/JPITDevLogo.jpg" alt="JPIT-logo" />
                  <span className="position-text">
                    <span className="position">Frontend Developer at</span>{" "}
                    JPITDev
                  </span>
                </div>
                <span>Jun 2024 - Present</span>
              </div>
              <div className="paragraph">
                <p>
                  Developed new, efficient and well-tested code for a variety of
                  different software projects. Worked closely with other team
                  members to identify and remove software bugs. Optimised
                  existing software applications for improved performance and
                  scalability, ensuring compatibility with evolving
                  technologies. Monitored emerging technology trends ,
                  advocating for the adoption of new tools and frameworks that
                  could enhance development efficiency. Developed and
                  implemented software solutions to meet client requirements,
                  enhancing system functionality and user satisfaction.
                  Participated in code reviews to maintain high-quality
                  standards and foster a culture of continuous improvement among
                  the development team. Utilised Agile methodologies to manage
                  project lifecycles, resulting in efficient and adaptable
                  development processes.
                </p>
              </div>
            </div>
            <div className="experience-card">
              <div className="card-heading">
                <div className="image">
                  <img src="/JDIT.png" alt="DPIT-logo" />
                  <span className="position-text">
                    <span className="position">
                      Frontend Developer (Volunteer) at
                    </span>{" "}
                    Diamond Pinnacle Solutions
                  </span>
                </div>
                <span>Jan 2024 - Dec 2024</span>
              </div>
              <div className="paragraph">
                <p>
                  My main responsibility was to create the visual and
                  interactive elements of webisites or web applications that
                  users directly engage with. I focused on the 'Client Side' of
                  development, meaning everything users see and interact with in
                  their browser. Customised software applications to support
                  unique business processes, delivering tailored solutions that
                  drove operational efficiency. Analysed user feedback to inform
                  future development priorities, ensuring software solutions
                  remained aligned with client needs. Amended existing software
                  to upgrade interfaces and elevate performance. Conferred with
                  project managers to gather information regarding limitations
                  or capabilities. Integrated software components and
                  third-party programs to measure accessibility and
                  functionality. Integrated third-party APIs and services into
                  software solutions, enhancing functionality and user
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
