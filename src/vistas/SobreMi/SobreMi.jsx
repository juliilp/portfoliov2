import React from "react";
import "./SobreMi.css";
export default function SobreMi() {
  const [flechaUno, setFlechaUno] = React.useState(false);
  const [flechaDos, setFlechaDos] = React.useState(false);
  const handlerFlechaUno = (e) => {
    setFlechaUno(!flechaUno);
  };
  const handlerFlechaDos = (e) => {
    setFlechaDos(!flechaDos);
  };

  return (
    <div className="sobremi-container">
      <div>
        <div className="sobremi-quiensoy">
          <h2>¿Quién soy?</h2>
          <i
            className={
              flechaUno === false
                ? "bi bi-arrow-right flecha"
                : "bi bi-arrow-right flecha rotate"
            }
            onClick={handlerFlechaUno}
          />
        </div>
        <p className={!flechaUno ? "hidden" : "visible"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          repudiandae quia
        </p>
      </div>
      <div>
        <div className="sobremi-yo">
          <h2>¿Por qué yo?</h2>
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
        <p className={!flechaDos ? "hidden" : "visible"}>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          repudiandae quia
        </p>
      </div>
    </div>
  );
}
