import { useEffect, useRef } from "react";
import Home from "./vistas/Home/Home";
import SobreMi from "./vistas/SobreMi/SobreMi";
import Contacto from "./vistas/Contacto/Contacto";
import Footer from "./vistas/Footer/Footer";
import Navbar from "./vistas/Navbar/Navbar";
import Tecnologias from "./vistas/Tecnologias/Tecnologias";
import "./App.css";
import Proyectosv2 from "./vistas/Proyectosv2/Proyectosv2";
import { inView, motion, useInView } from "framer-motion";
export default function App() {
  const ref = useRef();
  const view = useInView(ref, { once: true });
  useEffect(() => {
    console.log(view);
  }, [view]);
  return (
    <motion.main className="container-todo" ref={ref}>
      <Navbar />
      <Home />
      <Tecnologias />
      <SobreMi />
      <Proyectosv2 />
      <Contacto />
      <Footer />
    </motion.main>
  );
}
