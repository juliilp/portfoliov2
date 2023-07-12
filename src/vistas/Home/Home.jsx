import React from "react";
import "./Home.css";
import imgMobile from "../../assets/img-mobile.svg";
import CV from "../../../CV.pdf";
import { motion } from "framer-motion";
export default function Home() {
  const motionImagen = {
    initial: {
      x: 200,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  const motionHome = {
    initial: {
      opacity: 0,
      x: -200,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  const motionIcons = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  return (
    <motion.main
      className="container-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.75 }}
    >
      <picture className="container-img-mobile">
        <motion.img
          src={imgMobile}
          alt="img-mobile"
          className="img-mobile"
          width={300}
          height={150}
          variants={motionImagen}
          initial="initial"
          animate="show"
          transition={{ delay: 0.7, duration: 0.7 }}
        />
      </picture>
      <motion.div
        className="container-home-info"
        variants={motionHome}
        initial="initial"
        animate="show"
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <div className="home-info-hijo">
          <h1 className="home-nombre">¡Hola, soy Julian!</h1>
          <h2 className="home-subnombre">Desarollador Web Full Stack</h2>
          <motion.div
            className="home-containers-icons"
            variants={motionIcons}
            initial="initial"
            animate="show"
            transition={{
              duration: 0.7,
              delayChildren: 2,
              staggerChildren: 0.5,
            }}
          >
            <motion.a
              variants={motionIcons}
              href="https://github.com/juliilp"
              target="_blank"
            >
              <i className="bi bi-github github" />
            </motion.a>
            <motion.a
              variants={motionIcons}
              href="https://www.linkedin.com/in/julian-lopez-7b9746234/"
              target="_blank"
            >
              <i className="bi bi-linkedin linkedin" />
            </motion.a>
            <motion.a
              variants={motionIcons}
              href="https://wa.me/1123820130"
              target="_blank"
            >
              <i className="bi bi-whatsapp whatsapp " />
            </motion.a>
          </motion.div>
          <div className="container-home-buttons">
            <a href="#contacto">
              <button className="home-button">
                Contacto{" "}
                <i className="bi bi-person-lines-fill icon-contacto " />
              </button>
            </a>
            <a href={CV} target="_blank">
              <button className="home-button">
                Ver CV <i className="bi bi-eye-fill icon-cv " />
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
}
