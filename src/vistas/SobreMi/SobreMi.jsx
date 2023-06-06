import React from "react";
import "./SobreMi.css";
export default function SobreMi() {
  return (
    <section className="sobremi-container" id="sobremi">
      <div className="sobremi-container-hijo">
        <div className="container-title-flecha">
          <h2 className="sobremi-title">Sobre mí</h2>
          <i className="bi bi-arrow-right flecha" />
        </div>
        <p className="sobremi-texto">
          Soy Julian Lopez. Siempre tuve afinidad y atracción con el mundo de la
          tecnología. Después de terminar la escuela, por meses me sentí
          estancado y sin saber qué hacer, hasta que conocí el desarrollo web y
          supe que era para mí. Me adentré en este nuevo mundo mediante videos y
          cursos en YouTube con poca idea de lo que me iba a encontrar. Un año
          después me recibí del bootcamp Soy Henry que disfruté mucho, en el
          cual conocí gente con la misma pasión que yo, y desarrollé buenos
          proyectos individuales y grupales con excelentes equipos de compañeros
          😊.
        </p>
      </div>
      <div className="sobremi-container-hijo">
        <div className="container-title-flecha">
          <h2 className="sobremi-title">¿Por qué yo?</h2>
          <i className="bi bi-arrow-right flecha" />
        </div>
        <p className="sobremi-texto">
          Soy un chico muy comprometido y entusiasmado por tener su primer
          trabajo en esta profesión que me apasiona. Me adapto rápido al equipo
          de trabajo, soy empático, social y me gusta conocer más sobre mis
          compañeros y fomentar un buen ambiente. Mi razonamiento orientado a la
          operativización y resolución de problemas me permite desgranar la
          situación para buscar soluciones adecuadas y enfocadas. Me gusta mucho
          aprender y enseñar, a la vez que soy receptivo. Soy creyente de que
          todos tenemos algo que enseñarnos 😉.
        </p>
      </div>
    </section>
  );
}
