import React, { useEffect } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [activeMenu, setActiveMenu] = React.useState(false);
  const handlerActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = activeMenu ? "hidden" : "unset";
    }
    return () => {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "unset";
      }
    };
  }, [activeMenu]);

  return (
    <header className="header">
      <i
        className={activeMenu ? "bi bi-list" : "bi bi-list menu"}
        onClick={handlerActiveMenu}
      />

      <h3 className="mi-nombre">Julian Lopez Padua</h3>

      <ul className="ul-adentro">
        <li>
          <i
            className="bi bi-x-lg closed-menu icon"
            onClick={handlerActiveMenu}
          />
        </li>
        <li>
          <a href="#tecnologias">
            <i className="uil uil-estate icon " />
            <span className="letra-icon">Tecnologías</span>
          </a>
        </li>
        <li>
          <a href="#sobremi">
            <i className="uil uil-user icon " />
            <span className="letra-icon">Sobre mí</span>
          </a>
        </li>
        <li>
          <a href="#proyectos">
            <i className="uil uil-scenery icon " />
            <span className="letra-icon">Proyectos</span>
          </a>
        </li>
        <li>
          <a href="#contacto">
            <i className="uil uil-message icon " />
            <span className="letra-icon">Contacto</span>
          </a>
        </li>
      </ul>
      <ul className={activeMenu === true ? "ul open" : "ul closed"}>
        <li>
          <i
            className="bi bi-x-lg closed-menu icon"
            onClick={handlerActiveMenu}
          />
        </li>
        <li>
          <a
            href="#tecnologias"
            onClick={handlerActiveMenu}
            className="nombre-icon-container"
          >
            <i className="uil uil-estate icon " />
            <span className="letra-icon">Tecnologías</span>
          </a>
        </li>
        <li>
          <a
            href="#sobremi"
            onClick={handlerActiveMenu}
            className="nombre-icon-container"
          >
            <i className="uil uil-user icon " />
            <span className="letra-icon">Sobre mí</span>
          </a>
        </li>
        <li>
          <a
            href="#proyectos"
            onClick={handlerActiveMenu}
            className="nombre-icon-container"
          >
            <i className="uil uil-scenery icon " />
            <span className="letra-icon">Proyectos</span>
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            onClick={handlerActiveMenu}
            className="nombre-icon-container"
          >
            <i className="uil uil-message icon " />
            <span className="letra-icon">Contacto</span>
          </a>
        </li>
      </ul>
    </header>
  );
}
