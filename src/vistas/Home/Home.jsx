import React from "react";
import "./Home.css";
import Yo from "../../assets/yo.jpeg";
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
        <h1 className="home-nombre">¡Hola, Soy Julian!</h1>
        <h2 className="home-subnombre">Desarollador Web Full Stack</h2>
        <div className="home-containers-icons">
          <i className="bi bi-github github" />
          <i className="bi bi-linkedin linkedin" />
          <i className="bi bi-whatsapp whatsapp " />
        </div>
        <div className="container-home-buttons">
          <button className="home-button">
            Contacto <i className="bi bi-person-lines-fill icon-contacto " />
          </button>
          <button className="home-button">
            Ver CV <i className="bi bi-eye-fill icon-cv " />
          </button>
        </div>
      </div>
    </div>
  );
}
