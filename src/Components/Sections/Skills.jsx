// import React from 'react'
// import framer motion
import { motion } from "framer-motion";
//  import icons
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFigmaLogo } from "react-icons/pi";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

//  import styles
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="skills">
          <div className="content">
            {/* Heading */}
            <div className="heading">
              <h2>
                my <strong>Skills</strong>
              </h2>
            </div>
            {/* swipper content */}
            <div className="swiper-content">
              <div className="swiper-icons">
                <div className="swiper-icon">
                  <FaReact size={70} />
                </div>
                <div className="swiper-icon">
                  <IoLogoJavascript size={80} />
                </div>
                <div className="swiper-icon">
                  <BiLogoTypescript size={80} />
                </div>
                <div className="swiper-icon">
                  <FaGitAlt size={80} />
                </div>
                <div className="swiper-icon">
                  <FaSass size={80} />
                </div>
                <div className="swiper-icon">
                  <RiTailwindCssFill size={80} />
                </div>
                <div className="swiper-icon">
                  <PiFigmaLogo size={80} />
                </div>
                <div className="swiper-icon">
                  <FaBootstrap size={80} />
                </div>
                <div className="swiper-icon">
                  <FaHtml5 size={80} />
                </div>
                <div className="swiper-icon">
                  <FaCss3Alt size={80} />
                </div>
                <div className="swiper-icon">
                  <FaGithub size={80} />
                </div>
                <div className="swiper-icon">
                  <RiNextjsFill size={80} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
