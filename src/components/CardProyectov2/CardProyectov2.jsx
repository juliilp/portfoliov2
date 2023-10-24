import "./CardProyectov2.css";
import { FaGithub } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import PropTypes from "prop-types";
export default function CardProyectov2({
  image,
  titulo,
  github,
  pagina,
  texto,
  tecnologias,
  reverse,
}) {
  CardProyectov2.propTypes = {
    image: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    pagina: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    tecnologias: PropTypes.string.isRequired,
    reverse: PropTypes.string.isRequired,
  };
  return (
    <section className="container-card-v2">
      <article className={`container-primerparte ${reverse}`}>
        <a
          href={pagina}
          target="blank"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image} alt="img-proyecto" className="img-proyectov2" />
        </a>
      </article>
      <article className="container-segundaparte">
        <div className="container-title-links">
          <h2>{titulo}</h2>
          <div className="container-icons">
            <a href={github} target="blank">
              <FaGithub size={30} color="#0101EE" />
            </a>
            <a href={pagina} target="blank">
              <RiComputerFill size={35} color="#551A8B" />
            </a>
          </div>
        </div>
        <div className="texto">
          <p>{texto}</p>
        </div>
        <div className="tecnologias-container">
          <p>Tecnologías: {tecnologias} </p>
        </div>
      </article>
    </section>
  );
}
