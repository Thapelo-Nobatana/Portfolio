// import React from "react";
import Hero from "../../Components/Sections/Hero";
import Skills from "../../Components/Sections/Skills";
import Experience from "../../Components/Sections/Experience";
import AboutMe from "../../Components/Sections/AboutMe";
import Projects from "../../Components/Sections/Projects";

const Home = () => {
  return (
    <>
      <section className="hero">
        <Hero />
      </section>
      <section className="skills">
        <Skills />
      </section>
      <section className="experience">
        <Experience />
      </section>
      <section className="about-me">
        <AboutMe />
      </section>
      <section className="project">
        <Projects />
      </section>
    </>
  );
};

export default Home;
