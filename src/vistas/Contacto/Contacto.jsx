import React from "react";
import "./Contacto.css";
import emailjs from "@emailjs/browser";
import enviarEmail from "./enviarEmail";
import Swal from "sweetalert2";

export default function Contacto() {
  const [datos, setDatos] = React.useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [errorForm, setErrorForm] = React.useState({});

  const handlerForm = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (user_name, user_email, user_message) => {
    let error = {};

    if (!user_name) {
      error.user_name = "El nombre no puede estar vacío";
    } else if (user_name.length < 3) {
      error.user_name = "Nombre mínimo de tres letras";
    } else if (!/^[a-zA-Z]+$/.test(user_name)) {
      error.user_name = "Solo se aceptan letras";
    }

    if (!user_email) {
      error.user_email = "El email no puede estar vacío";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user_email)
    ) {
      error.user_email = "El email no es válido";
    }

    if (!user_message) {
      error.user_message = "La descripción no puede estar vacía";
    } else if (user_message.length < 10) {
      error.user_message = "La descripcion no puede tener menos de 10 letras";
    }

    return error;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { user_name, user_email, user_message } = datos;
    const validateError = validate(user_name, user_email, user_message);

    if (Object.keys(validateError).length === 0) {
      enviarEmail(user_name, user_email, user_message);
      emailjs.sendForm(
        "service_9rxyjn7",
        "template_2te83ed",
        e.target,
        "muR_rneTUlOkLDPRR"
      );
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado con éxito",
      });
      setDatos({
        user_name: "",
        user_email: "",
        user_message: "",
      });
    } else {
      setErrorForm(validateError);
    }
  };

  return (
    <section className="container-form">
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
            placeholder="nombre"
          />
          {errorForm.user_name && (
            <p className="error-message">{errorForm.user_name}</p>
          )}
        </div>
        <div className="container-span-input">
          <span className="span-contacto">Email</span>
          <input
            type="email"
            name="user_email"
            placeholder="nombre@gmail.com"
            onChange={handlerForm}
            className="input-contacto"
            value={datos.user_email}
          />
          {errorForm.user_email && (
            <p className="error-message">{errorForm.user_email}</p>
          )}
        </div>
        <div className="container-span-input">
          <span className="span-contacto">Mensaje</span>
          <textarea
            name="user_message"
            onChange={handlerForm}
            className="input-contacto"
            placeholder="mensaje"
            rows={4}
            value={datos.user_message}
          />
          {errorForm.user_message && (
            <p className="error-message">{errorForm.user_message}</p>
          )}
        </div>
        <button className="button-contacto">Enviar mensaje</button>
      </form>
    </section>
  );
}
