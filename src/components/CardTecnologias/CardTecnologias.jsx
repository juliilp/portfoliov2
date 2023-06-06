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
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
export default function CardTecnologias({ titulo }) {
  return (
    <>
      <>
        {titulo === "Mercado Solidario" && (
          <div style={{ display: "flex", gap: "0.5rem", marginLeft: "0.5rem" }}>
            <SiNextdotjs size="1.1rem" />
            <SiTailwindcss size="1.1rem" />
            <SiMongodb size="1.1rem" />
            <SiReact size="1.1rem" />
          </div>
        )}
      </>
    </>
  );
}
