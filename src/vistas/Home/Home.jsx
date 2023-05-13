import React from "react";
import "./Home.css";
import Yo from "../../assets/yo.jpeg";
export default function Home() {
  return (
    <div className="container-home">
      <div className="container-img-icons">
        <div className="container-img">
          {/* <img src={Yo} className="home-img-yo" /> */}
          <span>Imagen xdxd</span>
        </div>
      </div>
      <div>
        <h1>¡Hola, Soy Julian!</h1>
        <p style={{ color: "#2626263" }}>Desarollador Web Full Stack</p>
        <div className="home-containers-icons">
          <i className="bi bi-github github" />
          <i className="bi bi-linkedin linkedin" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <button className="home-button">Contactame</button>
            <button className="home-button" style={{ marginTop: "7px" }}>
              Curriculum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
