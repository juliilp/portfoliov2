import React from "react";
import "./Contacto.css";
export default function Contacto() {
  const [datos, setDatos] = React.useState({
    nombre: "",
    email: "",
    descripcion: "",
  });

  const handlerForm = (e) => {
    e.preventDefault();
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setDatos({
      nombre: "",
      email: "",
      descripcion: "",
    });
  };
  return (
    <div className="container-form">
      <h2>¡Contactemonos!</h2>
      <form className="form" onSubmit={submitHandler}>
        <div className="container-span-input">
          <span className="span-contacto">Nombre</span>
          <input
            type="text"
            name="nombre"
            onChange={handlerForm}
            className="input-contacto"
            value={datos.nombre}
          />
        </div>
        <div className="container-span-input">
          <span className="span-contacto">Email</span>
          <input
            type="email"
            name="email"
            onChange={handlerForm}
            className="input-contacto"
            value={datos.email}
          />
        </div>
        <div className="container-span-input">
          <span className="span-contacto">Descripcion</span>
          <textarea
            name="descripcion"
            onChange={handlerForm}
            className="input-contacto"
            rows={4}
            value={datos.descripcion}
          />
        </div>
        <button className="button-contacto">Enviar mensaje</button>
      </form>
    </div>
  );
}
