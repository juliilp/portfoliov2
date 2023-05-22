import React from "react";
import "./Home.css";
import imgMobile from "../../assets/img-mobile.svg";
export default function Home() {
  return (
    <div className="container-home">
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
            <i className="bi bi-linkedin linkedin" target="_blank" />
          </a>
          <a href="https://wa.me/1123820130">
            <i className="bi bi-whatsapp whatsapp " target="_blank" />
          </a>
        </div>
        <div className="container-home-buttons">
          <a href="#contacto">
            <button className="home-button">
              Contacto <i className="bi bi-person-lines-fill icon-contacto " />
            </button>
          </a>
          <button className="home-button">
            Ver CV <i className="bi bi-eye-fill icon-cv " />
          </button>
        </div>
      </div>
    </div>
  );
}
