import { useEffect, useRef } from "react";
import Home from "./vistas/Home/Home";
import SobreMi from "./vistas/SobreMi/SobreMi";
import Contacto from "./vistas/Contacto/Contacto";
import Footer from "./vistas/Footer/Footer";
import Navbar from "./vistas/Navbar/Navbar";
import Tecnologias from "./vistas/Tecnologias/Tecnologias";
import "./App.css";
import Proyectosv2 from "./vistas/Proyectosv2/Proyectosv2";
import { motion, useAnimation, useInView } from "framer-motion";

export function Section({ children }) {
  const variantsOption = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  const ref = useRef(null);
  const view = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (view) {
      controls.start("show");
    }
  }, [view]);

  return (
    <motion.section
      ref={ref}
      variants={variantsOption}
      initial="initial"
      animate={view ? "show" : "initial"}
      transition={{ duration: 1, delay: 0.3, delayChildren: 1 }}
    >
      <span>{children}</span>
    </motion.section>
  );
}

export default function App() {
  const ref = useRef();
  return (
    <motion.main className="container-todo" ref={ref}>
      <Navbar />
      <Home />
      <Section>
        <Tecnologias />
      </Section>
      <Section>
        <SobreMi />
      </Section>
      <Section>
        <Proyectosv2 />
      </Section>
      <Section>
        <Contacto />
      </Section>
      <Section>
        <Footer />
      </Section>
    </motion.main>
  );
}
