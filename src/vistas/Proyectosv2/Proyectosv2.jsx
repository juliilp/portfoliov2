import React from "react";
import "./Proyectosv2.css";
import CardProyectov2 from "../../components/CardProyectov2/CardProyectov2";
import CardProyectov2Inverse from "../../components/CardProyectov2Inverse/CardProyectov2Inverse";
import { Section } from "../../App";
import {
  Mercado,
  VideoGames,
  Gigabyte,
  FoodApp,
  VeggieBudiness,
  AppEcommerce,
} from "../../utils/dataProyectos";
export default function Proyectosv2() {
  return (
    <section className="section-proyectov2" id="proyectos">
      <h2 className="section-proyectov2-title">Proyectos</h2>
      <div className="Proyectos">
        {
          <Section>
            <CardProyectov2
              image={Mercado.image}
              titulo={Mercado.titulo}
              texto={Mercado.texto}
              github={Mercado.github}
              pagina={Mercado.pagina}
              tecnologias={Mercado.tecnologias}
            />
          </Section>
        }
        {
          <Section>
            <CardProyectov2Inverse
              image={VideoGames.image}
              titulo={VideoGames.titulo}
              texto={VideoGames.texto}
              github={VideoGames.github}
              pagina={VideoGames.pagina}
              tecnologias={VideoGames.tecnologias}
            />
          </Section>
        }
        {
          <Section>
            <CardProyectov2
              image={Gigabyte.image}
              titulo={Gigabyte.titulo}
              texto={Gigabyte.texto}
              github={Gigabyte.github}
              pagina={Gigabyte.pagina}
              tecnologias={Gigabyte.tecnologias}
            />
          </Section>
        }
        {
          <Section>
            <CardProyectov2Inverse
              image={FoodApp.image}
              titulo={FoodApp.titulo}
              texto={FoodApp.texto}
              github={FoodApp.github}
              pagina={FoodApp.pagina}
              tecnologias={FoodApp.tecnologias}
            />
          </Section>
        }
        {
          <Section>
            <CardProyectov2
              image={VeggieBudiness.image}
              titulo={VeggieBudiness.titulo}
              texto={VeggieBudiness.texto}
              github={VeggieBudiness.github}
              pagina={VeggieBudiness.pagina}
              tecnologias={VeggieBudiness.tecnologias}
            />
          </Section>
        }
        {
          <Section>
            <CardProyectov2Inverse
              image={AppEcommerce.image}
              titulo={AppEcommerce.titulo}
              texto={AppEcommerce.texto}
              github={AppEcommerce.github}
              pagina={AppEcommerce.pagina}
              tecnologias={AppEcommerce.tecnologias}
            />
          </Section>
        }
      </div>
    </section>
  );
}
