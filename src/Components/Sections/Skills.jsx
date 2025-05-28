// import React from 'react'
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
useRef;
//  import styles
import "./Skills.css";

const Skills = () => {
  const targetRef = useRef(null);
  const { scrollXProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-55%"]);
  return (
    <div className="skills" ref={targetRef}>
      <div className="content">
        {/* Heading */}
        <div className="heading">
          <h2>
            my <strong>Skills</strong>
          </h2>
        </div>
        {/* swipper content */}
        <div className="swiper-content">
          <motion.div
            className="swiper-icons"
            animate={{ x: 100 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              type: "spring",
              repeatType: "loop",
            }}
          >
            <div className="swiper-icon">
              <FaReact size={50} />
            </div>
            <div className="swiper-icon">
              <IoLogoJavascript size={50} />
            </div>
            <div className="swiper-icon">
              <BiLogoTypescript size={50} />
            </div>
            <div className="swiper-icon">
              <FaGitAlt size={50} />
            </div>
            <div className="swiper-icon">
              <FaSass size={50} />
            </div>
            <div className="swiper-icon">
              <RiTailwindCssFill size={50} />
            </div>
            <div className="swiper-icon">
              <PiFigmaLogo size={50} />
            </div>
            <div className="swiper-icon">
              <FaBootstrap size={50} />
            </div>
            <div className="swiper-icon">
              <FaHtml5 size={50} />
            </div>
            <div className="swiper-icon">
              <FaCss3Alt size={50} />
            </div>
            <div className="swiper-icon">
              <FaGithub size={50} />
            </div>
            <div className="swiper-icon">
              <RiNextjsFill size={50} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
