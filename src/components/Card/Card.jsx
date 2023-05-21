import React, { useState } from "react";
import "./Card.css";
export default function Card({ titulo, textoMenu, image }) {
  return (
    <div className="card">
      <img src={image} alt="Imagen" className="imagen-card" />
      <div className="container-title-p">
        <h5 className="title-card">{titulo}</h5>
        <p className="card-p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, rerum?
        </p>
        <div className="container-card-buttons">
          <button className="card-button">Web</button>
          <button className="card-button">Github</button>
        </div>
      </div>
    </div>
  );
}
