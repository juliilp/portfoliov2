import React from "react";
import "./Proyectos.css";
import Carrousel from "../../components/Carrousel/Carrousel";
export default function Habilidades() {
  return (
    <section className="proyectos-container">
      <h2 className="titulo-proyectos" id="proyectos">
        Mis Proyectos
      </h2>
      <div className="container-carrousel">
        <Carrousel />
      </div>
    </section>
  );
}
