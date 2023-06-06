import React from "react";
import "./CardProyectov2Inverse.css";
import { FaGithub } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import CardTecnologias from "../CardTecnologias/CardTecnologias";
export default function CardProyectov2Inverse({
  image,
  titulo,
  github,
  pagina,
  texto,
  tecnologias,
}) {
  return (
    <section className="container-card-v2">
      <div className="container-segundaparte">
        <div className="container-title-links">
          <h2>{titulo}</h2>
          <div className="container-icons">
            <a href={github} target="_blank">
              <FaGithub size={30} />
            </a>
            <a href={pagina} target="_blank">
              <RiComputerFill size={35} />
            </a>
          </div>
        </div>
        <div className="texto">
          <p>{texto}</p>
        </div>
        <div className="tecnologias-container">
          <p>Tecnologías: {tecnologias} </p>
        </div>
      </div>
      <div className="container-primerparte">
        <a
          href={pagina}
          target="_blank"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image} alt="img-proyecto" className="img-proyectov2" />
        </a>
      </div>
    </section>
  );
}
