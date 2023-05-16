import React, { useState } from "react";
import "./Card.css";
import MercadoSolidario from "../../assets/mercadosolidario/mercadosolidario1351.png";
import FoodApp from "../../assets/foodapp/foodapp1366.png";
import VideoGames from "../../assets/videogamesapp/videogames1345.png";
import Gigabyte from "../../assets/gigabyteapp/gigabyte1351.png";
import Menu from "./Menu/Menu";
import { storeMenu } from "../../store/store";
const arrayImagenes = [
  { imagen: MercadoSolidario },
  { imagen: FoodApp },
  { imagen: VideoGames },
  { imagen: Gigabyte },
];
export default function Card({ titulo, textoMenu }) {
  const [active, setActive] = useState(false);

  const handlerActivate = () => {
    setActive(!active);
  };

  const buttonHandler = () => {
    setActive(!active);
  };
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <img src={MercadoSolidario} alt="Imagen" className="imagen-carrousel" />
      <button className="button-card" onClick={handlerActivate}>
        Ver más
      </button>
      {active === true ? (
        <div className="container-menu">
          <Menu onClickButton={buttonHandler} texto={textoMenu} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
