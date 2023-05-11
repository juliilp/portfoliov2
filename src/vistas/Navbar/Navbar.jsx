import React, { useState } from "react";
import "./Navbar.css";
import { DarkModeToggle } from "react-dark-mode-toggle-2";
export default function Navbar() {

  const [menuHamburguesa, setMenuHamburguesa] = useState(false)
  const [idioma, setIdioma] = useState(true)
  const [isDarkMode, setIsDarkMode] = React.useState(false);
    const handlerHamburguesa = () => {
      setMenuHamburguesa(!menuHamburguesa)
    }

    const handlerIdioma = () => {
      setIdioma(!idioma)
    }
    console.log(isDarkMode)
  return (
    <nav >
      <div className="navbar-container">
        <div>
      <i className="bi bi-list hamburguesa " onClick={handlerHamburguesa}/>
      </div>
      <DarkModeToggle 
      onChange={setIsDarkMode}
      size={70}
      isDarkMode={isDarkMode}
      />
      </div>
      <ul className={menuHamburguesa === true ? "navbar-ul-li-open navbar-ul-li-general" : "navbar-ul-li-closed navbar-ul-li-general"}>
        <li className="navbar-ul-li">Inicio</li>
        <li className="navbar-ul-li">Sobre mi</li>
        <li className="navbar-ul-li">Habilidades</li>
        <li className="navbar-ul-li">Contacto</li>
        <li className="navbar-ul-li" onClick={handlerIdioma} >{idioma === true ? "Español" : "English"}</li>
        <li className="navbar-ul-li">
          
        </li>
      </ul>
    </nav>
  );
}
