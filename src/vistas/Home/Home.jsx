import React from "react";
import "./Home.css";
import Yo from "../../assets/yo.jpeg";
export default function Home() {
  return (
    <div className="container-home">
      <div>
        <div className="container-img">
          {/* <img src={Yo} className="home-img-yo" /> */}
          <h1>Imagen xdxd</h1>
        </div>
      </div>
      <div>
        <h1>¡Hola, Soy Julian!</h1>
        <p style={{ color: "#2626263" }}>Desarollador Web Full Stack</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <button className="home-button">Contactame</button>
            <button className="home-button">Curriculum</button>
          </div>
          <div className="home-containers-icons">
            <i className="bi bi-github github" />
            <i className="bi bi-linkedin linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
}
