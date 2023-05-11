import React from "react";
import Navbar from "./vistas/Navbar/Navbar";
import Home from "./vistas/Home/Home";
import SobreMi from "./vistas/SobreMi/SobreMi";
import Habilidades from "./vistas/Habilidades/Habilidades";
import Contacto from "./vistas/Contacto/Contacto";
import Footer from "./vistas/Footer/Footer";
import "./App.css";
export default function App() {
  return (
    <div className="container-todo">
      <Navbar />
      <Home />
      <SobreMi />
      <Habilidades />
      {/* <Contacto />
        <Footer /> */}
    </div>
  );
}
