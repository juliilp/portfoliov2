import React from "react";
import "./Menu.css";
export default function Menu({ onClickButton, texto }) {
  return (
    <div className="container-card-menu">
      <p>{texto}</p>
      <button className="button-card-menu" onClick={onClickButton}>
        X
      </button>
    </div>
  );
}
