// import React from "react";
import Hero from "../../Components/Sections/Hero";
import Skills from "../../Components/Sections/Skills";
import Experience from "../../Components/Sections/Experience";
import AboutMe from "../../Components/Sections/AboutMe";
import Projects from "../../Components/Sections/Projects";
import Contact from "../../Components/Sections/Contact";

const Home = () => {
  return (
    <>
      <section className="hero" id="hero">
        <Hero />
      </section>
      <section className="skills" id="skills">
        <Skills />
      </section>
      <section className="experience" id="experience">
        <Experience />
      </section>
      <section className="about-me" id="about-me">
        <AboutMe />
      </section>
      <section className="projects" id="projects">
        <Projects />
      </section>
      <section className="contact-me" id="contact-me">
        <Contact />
      </section>
    </>
  );
};

export default Home;
