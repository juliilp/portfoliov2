import React, { useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import "./Tecnologias.css";
import { motion, useInView } from "framer-motion";

const motionOption = {
  initial: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
export default function Tecnologias() {
  const ref = useRef();
  const view = useInView(ref, { once: true });
  return (
    <section className="section-container-tecnologias" id="tecnologias">
      <h2 className="tecnologias-title">Tecnologías</h2>
      <motion.div
        ref={ref}
        className="container-tecnologias"
        variants={motionOption}
        initial="initial"
        animate={view ? "show" : "initial"}
        transition={{
          duration: 1.2,
          delayChildren: 0.5,
          staggerChildren: 0.25,
        }}
      >
        <motion.div className="tecnologias" variants={motionOption}>
          <SiHtml5 size="2rem" color="#D84E64" />
          <span className="tecnologia-span">Html</span>
        </motion.div>
        <motion.div className="tecnologias" variants={motionOption}>
          <SiCss3 size="2rem" color="#6781FA" />
          <span className="tecnologia-span">Css</span>
        </motion.div>
        <motion.div className="tecnologias" variants={motionOption}>
          <SiTailwindcss size="2rem" color="#07B0CE" />
          <span className="tecnologia-span">Tailwind</span>
        </motion.div>
        <motion.div className="tecnologias" variants={motionOption}>
          <SiJavascript
            size="2rem"
            color="#FFF058"
            style={{ backgroundColor: "#1a1a24" }}
          />
          <span className="tecnologia-span">Javascript</span>
        </motion.div>
        <motion.div className="tecnologias" variants={motionOption}>
          <SiReact size="2rem" color="#60DBFB" />
          <span className="tecnologia-span">React</span>
        </motion.div>
        <motion.div className="tecnologias" variants={motionOption}>
          <SiRedux size="2rem" color="#7249B7" />
          <span className="tecnologia-span">Redux</span>
        </motion.div>
        <motion.div className="tecnologias" variants={motionOption}>
          <SiNextdotjs size="2rem" />
          <span className="tecnologia-span">Next</span>
        </motion.div>
        <motion.div className="tecnologias" variants={motionOption}>
          <SiExpress size="2rem" />
          <span className="tecnologia-span">Express</span>
        </motion.div>
        <motion.div className="tecnologias" variants={motionOption}>
          <SiPostgresql size="2rem" color="#31628B" />
          <span className="tecnologia-span">Postgresql</span>
        </motion.div>
        <motion.div className="tecnologias" variants={motionOption}>
          <SiTypescript size="2rem" color="#2F74C0" />
          <span className="tecnologia-span">Typescript</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
