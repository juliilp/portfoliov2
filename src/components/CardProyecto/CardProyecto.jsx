import React from "react";
import "./CardProyecto.css";
export default function CardProyecto({ imagen, titulo, texto, tecnologias }) {
  return (
    <div>
      <img src={imagen} alt={imagen} />
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <span>Tecnologías usadas:</span>
      <div>{tecnologias}</div>
      <button>Sitio web</button>
      <button>Código</button>
    </div>
  );
}
