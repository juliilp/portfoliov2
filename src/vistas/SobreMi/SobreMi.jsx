import React from "react";
import "./SobreMi.css";
export default function SobreMi() {
  const [flechaUno, setFlechaUno] = React.useState(true);
  const [flechaDos, setFlechaDos] = React.useState(true);
  const handlerFlechaUno = (e) => {
    setFlechaUno(!flechaUno);
  };
  const handlerFlechaDos = (e) => {
    setFlechaDos(!flechaDos);
  };

  return (
    <div className="sobremi-container">
      <div>
        <div className="sobremi-quiensoy" onClick={handlerFlechaUno}>
          <h2 className="title-quiensoy" id="sobremi">
            ¿Quién soy?
          </h2>
          <i
            className={
              flechaUno === false
                ? "bi bi-arrow-right flecha"
                : "bi bi-arrow-right flecha rotate"
            }
            onClick={handlerFlechaUno}
          />
        </div>
        <p className={!flechaUno ? "hidden" : "visible sobremi-texto"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          repudiandae quia Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Est repudiandae quia Lorem ipsum,
        </p>
      </div>
      <div>
        <div className="sobremi-yo" onClick={handlerFlechaDos}>
          <h2 className="title-porqueyo">¿Por qué yo?</h2>
          <i
            className={
              flechaDos === false
                ? "bi bi-arrow-right flecha"
                : "bi bi-arrow-right flecha rotate"
            }
            name="dos"
            onClick={handlerFlechaDos}
          />
        </div>
        <p
          className={
            !flechaDos
              ? "hidden hiddenDos porqueyo-hidden"
              : "visible visibleDos"
          }
        >
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          repudiandae quia
        </p>
      </div>
    </div>
  );
}
