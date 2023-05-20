import React from "react";
import Home from "./vistas/Home/Home";
import SobreMi from "./vistas/SobreMi/SobreMi";
import Proyectos from "./vistas/Proyectos/Proyectos";
import Contacto from "./vistas/Contacto/Contacto";
import Footer from "./vistas/Footer/Footer";
import Navbar from "./vistas/Navbar/Navbar";
import "./App.css";
export default function App() {
  return (
    <div className="container-todo">
      <Navbar />
      <Home />
      <SobreMi />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}
