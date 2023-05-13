import React from "react";
import "./Navbar.css";
import En from "../../assets/english.png";
import Esp from "../../assets/spain.svg";
export default function Navbar() {
  const [activeMenu, setActiveMenu] = React.useState(false);
  const [idioma, setIdioma] = React.useState(false);
  const [colorbg, setColorBg] = React.useState(false);
  const handlerActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };
  const handlerIdioma = () => {
    setIdioma(!idioma);
  };
  const handlerColorBg = () => {
    setColorBg(!colorbg);
  };
  return (
    <div>
      <header className="header">
        <h3>Julian Lopez Padua</h3>
        <nav className="container-icons">
          <i
            className={
              colorbg
                ? "uil uil-moon change-theme menu"
                : "uil uil-moon change-theme uil-sun menu sol"
            }
            onClick={handlerColorBg}
          />
          <i
            className={activeMenu ? "uil uil-apps menu" : "uil uil-apps menu"}
            onClick={handlerActiveMenu}
          />
        </nav>
      </header>
      <ul className={activeMenu === true ? "ul open" : "ul closed"}>
        <li>
          <i className="uil uil-estate icon " />
          <span className="letra-icon">Inicio</span>
        </li>
        <li>
          <i className="uil uil-user icon " />
          <span className="letra-icon">Sobre mi</span>
        </li>
        <li>
          <i className="uil uil-scenery icon " />
          <span className="letra-icon">Proyectos</span>
        </li>
        <li>
          <i className="uil uil-message icon " />
          <span className="letra-icon">Contacto</span>
        </li>
        <li>
          <img
            src={idioma ? En : Esp}
            alt="img idioma"
            width={19}
            height={19}
          />
          <span className="letra-icon" onClick={handlerIdioma}>
            {idioma ? "English" : "Español"}
          </span>
        </li>
      </ul>
    </div>
  );
}
