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

  console.log(flechaUno);
  console.log(flechaDos);
  return (
    <div className="sobremi-container">
      <div>
        <div className="sobremi-quiensoy">
          <h2>¿Quien Soy?</h2>
          <i
            className={
              flechaUno === false
                ? "bi bi-arrow-right flecha"
                : "bi bi-arrow-right flecha rotate"
            }
            onClick={handlerFlechaUno}
          />
        </div>
        <p>{flechaUno === false ? "" : "Quien soy"}</p>
      </div>
      <div>
        <div className="sobremi-yo">
          <h2>¿Por que me eligirías a mi?</h2>
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
        <p>{flechaDos === false ? "" : "Por que yo"}</p>
      </div>
    </div>
  );
}
