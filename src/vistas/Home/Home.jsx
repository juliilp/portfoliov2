import React from "react";
import "./Home.css";
import imgMobile from "../../assets/img-mobile.svg";
import CV from "../../../CV.pdf";
export default function Home() {
  return (
    <main className="container-home">
      <picture className="container-img-mobile">
        <img
          src={imgMobile}
          alt="img-mobile"
          className="img-mobile"
          width={300}
          height={150}
        />
      </picture>
      <div className="container-home-info">
        <div className="home-info-hijo">
          <h1 className="home-nombre">¡Hola, soy Julian!</h1>
          <h2 className="home-subnombre">Desarollador Web Full Stack</h2>
          <div className="home-containers-icons">
            <a href="https://github.com/juliilp" target="_blank">
              <i className="bi bi-github github" />
            </a>
            <a
              href="https://www.linkedin.com/in/julian-lopez-7b9746234/"
              target="_blank"
            >
              <i className="bi bi-linkedin linkedin" />
            </a>
            <a href="https://wa.me/1123820130" target="_blank">
              <i className="bi bi-whatsapp whatsapp " />
            </a>
          </div>
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
      </div>
    </main>
  );
}
