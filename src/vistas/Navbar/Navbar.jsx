import React from "react";
import "./Navbar.css";
export default function Navbar() {
  const [activeMenu, setActiveMenu] = React.useState(false);

  const handlerActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };
  console.log(activeMenu);
  return (
    <div>
      <header className="header">
        <h3>Julian Lopez Padua</h3>
        <nav>
          <i
            className={activeMenu ? "uil uil-apps menu" : "uil uil-apps menu"}
            onClick={handlerActiveMenu}
          />
        </nav>
      </header>
      <ul className={activeMenu === true ? "ul open" : "ul closed"}>
        <li>
          <i className="uil uil-estate" /> Inicio
        </li>
        <li>
          <i className="uil uil-user" />
          Sobre mi
        </li>
        <li>
          <i className="uil uil-scenery" />
          Proyectos
        </li>
        <li>
          <i className="uil uil-message" />
          Contacto
        </li>
        <li>Español</li>
      </ul>
    </div>
  );
}
