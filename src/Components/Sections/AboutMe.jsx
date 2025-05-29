// import React from 'react'
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container">
        <div className="content">
          {/* left-side of the content */}

          <img className="image" src="./public/Thapelo_Face.png" alt="image" />

          {/* right-side of the content */}
          <div className="heading-content">
            <div className="heading">
              <h2>
                About <strong>ME</strong>
              </h2>
            </div>
            <div className="paragraph">
              <p>
                I'm Keamogetswi Malau, a Frontend Software Engineer with a
                passion for building engaging, user-friendly web applications.
                Who loves crafting engaging, user-friendly web applications that
                don’t just work well—they feel great to use. I specialize in
                designing and implementing responsive, accessible interfaces,
                blending technical know-how with a keen eye for design.
                Proficient in tools like React.js, Tailwind CSS, and Figma, I’m
                always on the lookout for ways to improve performance, elevate
                the user experience, and stay ahead of the latest frontend
                trends. When I’m not debugging layouts or tweaking pixels,
                you’ll probably find me scoring goals on the soccer field,
                grinding through game levels, or tinkering with new tech ideas.
                I believe that a great interface is like a good game—intuitive,
                immersive, and just plain fun. Whether it's pixels or players, I
                bring energy, creativity, and a love for great experiences to
                everything I do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
