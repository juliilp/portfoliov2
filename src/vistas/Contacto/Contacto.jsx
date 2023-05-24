import React from "react";
import "./Contacto.css";
import emailjs from "@emailjs/browser";
import enviarEmail from "./enviarEmail";
import Swal from "sweetalert2";
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
    const { nombre, email, descripcion } = datos;
    enviarEmail(nombre, email, descripcion);
    e.preventDefault();
    setDatos({
      user_name: "",
      user_email: "",
      user_message: "",
    });
    emailjs.sendForm(
      "service_9rxyjn7",
      "template_2te83ed",
      event.target,
      "muR_rneTUlOkLDPRR"
    );
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado con éxito",
    });
  };
  return (
    <div className="container-form">
      <h2 className="container-title">¡Contactémonos!</h2>
      <form className="form" onSubmit={submitHandler} id="contacto">
        <div className="container-span-input">
          <span className="span-contacto">Nombre</span>
          <input
            type="text"
            name="user_name"
            onChange={handlerForm}
            className="input-contacto"
            value={datos.user_name}
            placeholder="name"
          />
        </div>
        <div className="container-span-input">
          <span className="span-contacto">Email</span>
          <input
            type="email"
            name="user_email"
            placeholder="name@gmail.com"
            onChange={handlerForm}
            className="input-contacto"
            value={datos.user_email}
          />
        </div>
        <div className="container-span-input">
          <span className="span-contacto">Mensaje</span>
          <textarea
            name="user_message"
            onChange={handlerForm}
            className="input-contacto"
            placeholder="Mensaje"
            rows={4}
            value={datos.user_message}
          />
        </div>
        <button className="button-contacto">Enviar mensaje</button>
      </form>
    </div>
  );
}
