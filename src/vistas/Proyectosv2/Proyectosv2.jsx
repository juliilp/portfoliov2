import "./Proyectosv2.css";
import dataProyectos from "../../utils/dataProyectos";
import CardProyectov2 from "../../components/CardProyectov2/CardProyectov2";
import CardProyectov2Inverse from "../../components/CardProyectov2Inverse/CardProyectov2Inverse";
import { Section } from "../../App";
export default function Proyectosv2() {
  return (
    <section className="section-proyectov2" id="proyectos">
      <h2 className="section-proyectov2-title">Proyectos</h2>
      <article className="Proyectos">
        {dataProyectos.map((p, key) => {
          return (
            <Section key={key}>
              {p.reverse === false ? (
                <CardProyectov2
                  image={p.image}
                  titulo={p.titulo}
                  texto={p.texto}
                  github={p.github}
                  pagina={p.pagina}
                  tecnologias={p.tecnologias}
                />
              ) : (
                <CardProyectov2Inverse
                  image={p.image}
                  titulo={p.titulo}
                  texto={p.texto}
                  github={p.github}
                  pagina={p.pagina}
                  tecnologias={p.tecnologias}
                />
              )}
            </Section>
          );
        })}
      </article>
    </section>
  );
}
