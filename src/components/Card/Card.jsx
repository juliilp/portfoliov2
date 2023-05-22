import React, { useState } from "react";
import "./Card.css";
export default function Card({ titulo, textoMenu, image, web, github }) {
  return (
    <div className="card">
      <img src={image} alt="Imagen" className="imagen-card" />
      <div className="container-title-p">
        <h5 className="title-card">{titulo}</h5>
        <p className="card-p">{textoMenu}</p>
        <div className="container-card-buttons">
          <a href={web} target="_blank">
            <button className="card-button">Web</button>
          </a>
          <a href={github} target="_blank">
            {" "}
            <button className="card-button">Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}
