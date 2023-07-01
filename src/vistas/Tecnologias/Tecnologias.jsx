import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import "./Tecnologias.css";
export default function Tecnologias() {
  return (
    <section className="section-container-tecnologias" id="tecnologias">
      <h2 className="tecnologias-title">Tecnologías</h2>
      <div className="container-tecnologias">
        <div className="tecnologias">
          <SiHtml5 size="2rem" color="#D84E64" />
          <span className="tecnologia-span">Html</span>
        </div>
        <div className="tecnologias">
          <SiCss3 size="2rem" color="#6781FA" />
          <span className="tecnologia-span">Css</span>
        </div>
        <div className="tecnologias">
          <SiTailwindcss size="2rem" color="#07B0CE" />
          <span className="tecnologia-span">Tailwind</span>
        </div>
        <div className="tecnologias">
          <SiJavascript
            size="2rem"
            color="#FFF058"
            style={{ backgroundColor: "#1a1a24" }}
          />
          <span className="tecnologia-span">Javascript</span>
        </div>
        <div className="tecnologias">
          <SiReact size="2rem" color="#60DBFB" />
          <span className="tecnologia-span">React</span>
        </div>
        <div className="tecnologias">
          <SiRedux size="2rem" color="#7249B7" />
          <span className="tecnologia-span">Redux</span>
        </div>
        <div className="tecnologias">
          <SiNextdotjs size="2rem" />
          <span className="tecnologia-span">Next</span>
        </div>
        <div className="tecnologias">
          <SiExpress size="2rem" />
          <span className="tecnologia-span">Express</span>
        </div>
        <div className="tecnologias">
          <SiPostgresql size="2rem" color="#31628B" />
          <span className="tecnologia-span">Postgresql</span>
        </div>
        <div className="tecnologias">
          <SiTypescript size="2rem" color="#2F74C0" />
          <span className="tecnologia-span">Typescript</span>
        </div>
      </div>
    </section>
  );
}
