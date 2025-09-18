// import React from "react";
// import framer motion
import { motion as Motion } from "framer-motion";
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
import SkillCard from "./SkillCard";

// const Skills = () => {
//   return (
//     <Motion.div
//       initial={{ opacity: 0, y: 50 }}
//       transition={{ duration: 0.8 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//     >
//       <div className="skills">
//         <div className="container content">
//           {/* Heading */}
//           <div className="heading">
//             <h2>
//               my <strong>Skills</strong>
//             </h2>
//           </div>
//           {/* swipper content */}
//           <div className="swiper-content">
//             <SkillCard />
//           </div>
//         </div>
//       </div>
//     </Motion.div>
//   );
// };

// export default Skills;
// const skills = [
//   { icon: FaReact },
//   { icon: IoLogoJavascript },
//   { icon: BiLogoTypescript },
//   { icon: FaGitAlt },
//   { icon: FaSass },
//   { icon: RiTailwindCssFill },
//   { icon: PiFigmaLogo },
//   { icon: FaBootstrap },
//   { icon: FaHtml5 },
//   { icon: FaCss3Alt },
//   { icon: FaGithub },
//   { icon: RiNextjsFill },
// ];

// const Skills = () => {
//   return (
//     <Motion.div
//       initial={{ opacity: 0, y: 50 }}
//       transition={{ duration: 0.8 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="skills-container"
//     >
//       <div className="skills">
//         <div className="content">
//           <div className="heading">
//             <h2>
//               my <strong>Skills</strong>
//             </h2>
//           </div>

//           {/* Horizontal looping wrapper */}
//           <Motion.div
//             className="skills-loop"
//             animate={{ x: ["0%", "-50%"] }} // move left by 50% of total width
//             transition={{
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 20,
//               ease: "linear",
//             }}
//           >
//             {/* Render icons twice for seamless looping */}
//             {[...skills, ...skills].map((skill, index) => {
//               const IconComponent = skill.icon;
//               return (
//                 <div key={index} className="skill-icon">
//                   <IconComponent size={80} />
//                 </div>
//               );
//             })}
//           </Motion.div>
//         </div>
//       </div>
//     </Motion.div>
//   );
// };

// export default Skills;

const Skills = () => {
  return (
    <>
      <section className="Skills">
        <div className="content">
          <div className="heading">
            <h2>
              my <strong>Skills</strong>
            </h2>
          </div>
          <Motion.div
            initial={{ opacity: 1, y: 1 }}
            // transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 1 }}
            viewport={{ once: true }}
            animate={{ x: ["0%", "-20%"] }} // move left by 50% of total width
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            }}
          >
            <div className="swiper-content">
              <SkillCard />
            </div>
          </Motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
