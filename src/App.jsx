import React from "react";
import Home from "./vistas/Home/Home";
import SobreMi from "./vistas/SobreMi/SobreMi";
import Proyectos from "./vistas/Proyectos/Proyectos";
import Contacto from "./vistas/Contacto/Contacto";
import Footer from "./vistas/Footer/Footer";
import Navbar from "./vistas/Navbar/Navbar";
import Tecnologias from "./vistas/Tecnologias/Tecnologias";
import "./App.css";
import Proyectosv2 from "./vistas/Proyectosv2/Proyectosv2";
export default function App() {
  return (
    <main className="container-todo">
      <Navbar />
      <Home />
      <Tecnologias />
      <SobreMi />
      {/* <Proyectos /> */}
      <Proyectosv2 />
      <Contacto />
      <Footer />
    </main>
  );
}
