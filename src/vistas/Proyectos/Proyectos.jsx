import React from "react";
import "./Proyectos.css";
import CardProyecto from "../../components/CardProyecto/CardProyecto";
import mercadoSolidario762 from "../../assets/mercadosolidario/mercadosolidario762.png";
// import mercadoSolidario1351 from "../../assets/mercadosolidario/mercadosolidario1351.png";
import mercadoSolidario1500 from "../../assets/mercadosolidario/mercadosolidario1500.png";
import {
  SiExpress,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
} from "react-icons/si";
import { RiDatabase2Line } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
export default function Habilidades() {
  return (
    <div className="proyectos-container">
      <h2 className="proyectos-titulo">Proyectos</h2>
      <CardProyecto
        imagen={mercadoSolidario1500}
        titulo="Mercado Solidario"
        texto="Este proyecto contiene dashboard, sistema de Log-In, implementación de Api, auth de terceros, envío de e-mails, chatbot, métodos de pago y mucho más."
        tecnologias={
          <div>
            <RiDatabase2Line size={25} />
            <GrGraphQl size={25} />
          </div>
        }
      />
    </div>
  );
}
