import React from "react";
import "./CardProyecto.css";
export default function CardProyecto({ imagen, titulo, texto, pagina, repo }) {
  return (
    <div className="card-container">
      <img src={imagen} alt={imagen} className="card-imagen" />
      <div className="card-info">
        <h3 className="card-titulo">{titulo}</h3>
        <p className="card-texto">{texto}</p>
        <div className="card-container-buttons">
          {" "}
          <a href={pagina} target="blank" className="card-buttons">
            Sitio web
          </a>
          <a href={repo} target="blank" className="card-buttons">
            Código
          </a>
        </div>
      </div>
    </div>
  );
}
