import MercadoSolidario from "../assets/mercadosolidario/mercadosolidario.png";
import VideoGamesApp from "../assets/videogamesapp/videogamesapp.png";
import GigabyteImg from "../assets/gigabyteapp/gigabyte.png";
import FoodAppImg from "../assets/foodapp/foodapp.png";
import VeggieBudinessImg from "../assets/veggiebudiness/veggiebudiness.png";
import Ecommerce from "../assets/ecommerce-react/ecommerce-react.png";
import PajarosCaidos from "../assets/pajaroscaidos/pajaroscaidos.png";
import FakeStoreApiImg from "../assets/fake-store-api/fake-store-api.png";
const dataProyectos = [
  {
    image: PajarosCaidos,
    titulo: "Refugio de aves - Pájaros Caidos",
    texto:
      "Proyecto grupal donde lideré un equipo de 6 integrantes para un cliente utilizando la metodologia scrum, realicé el maquetado de casi 30 páginas, así como también encargado de la lógica y sus formularios.",
    github: "https://github.com/juliilp/frontend-pajaroscaidos",
    pagina: "https://redpajaroscaidos.org/",
    tecnologias: "HTML, CSS, Tailwind, Javascript, React, NextJS.",
  },
  {
    image: MercadoSolidario,
    titulo: "Mercado Solidario",
    texto:
      "Proyecto grupal de 8 integrantes para un cliente, usamos git-flow,metodología scrum y la app contiene dashboard, login local y de terceros, implementación de api, envio de emails, chatbot, método de pago, filtros combinados y mucho más",
    github: "https://github.com/juliilp/mercadosolidario",
    pagina: "https://mercadosolidario.vercel.app/",
    tecnologias:
      "Html, CSS, Tailwind, Javascript, React, NextJS, MongoDB, Prisma.",
  },
  {
    titulo: "Veggie Budiness",
    image: VeggieBudinessImg,
    texto:
      "Este proyecto está desarrollandose por el pedido de un cliente de manera freelance. Creamos el diseño en Figma a partir de la paleta de colores y el logo, y mantenemos reuniones frecuentes y comunicación constante para conversar el avance. La web va a tener: responsive design, un catálogo de productos a la venta, un blog de recetas propias del emprendimiento, un sistema de suscripción newsletter, filtro de búsqueda y más funciones.",
    github: "https://github.com/juliilp/veggie-budines",
    pagina: "#",
    tecnologias: "Html, CSS, Tailwind, Javascript, React, Figma.",
  },
  {
    titulo: "fake-store-api",
    image: FakeStoreApiImg,
    texto:
      "Este proyecto es de manera individual con la intención de aprender MongoDB como base de datos y Astro como frontend. Su funcionalidad está especialmente en su backend, donde su único rol del frontend es explicar todas sus rutas del backend, tiene mercadopago, usuarios, productos, rol de admin, páginado, authenticación, relación de esquemas y mucho más",
    github: "https://github.com/juliilp/Project-fake-api",
    pagina: "https://project-fake-api.vercel.app/",
    tecnologias:
      "Html, CSS, Tailwind, Javascript, React, Astro, NodeJS, Express, MongoDB.",
  },
  {
    titulo: "InnovaWeb",
    image: Ecommerce,
    texto:
      "Este proyecto fue realizado de manera individual, consumiendo una api y tiene panel de admin, responsive design, carrito de compras, creacion de productos siendo solo administrador, sector de favoritos, los datos no se eliminan al recargar la pagina, formularios controlados, filtro de búsqueda, visualización, detalle y especificaciones de cada producto y carteles de alertas y notificaciones",
    github: "https://github.com/juliilp/ecommerce-react",
    pagina: "https://innovaweb.vercel.app/",
    tecnologias: "Html, CSS, Tailwind, Javascript, React",
  },
  {
    titulo: "Gigabyte",
    image: GigabyteImg,
    texto:
      "Este proyecto no tiene funcionalidad y fue realizado para probar maneras diferentes de realizar las cosas, como clases de CSS reutilizables, desktop first y empezando por lo básico de framer motion",
    github: "https://github.com/juliilp/Gigabyte-Gallery",
    pagina: "https://gigabyte-gallery.vercel.app/",
    tecnologias: "Html, CSS, Javascript, React.",
  },
  {
    titulo: "Food App",
    image: FoodAppImg,
    texto:
      "Este proyecto fue realizado de manera individual, consumiendo una api y en base a eso, la creación de base de datos, backend y frontend. He realizado formularios controlados, paginado, filtros combinados, responsive design y mucho más",
    github: "https://github.com/juliilp/Project-Food",
    pagina: "https://project-food-two.vercel.app/",
    tecnologias: "Html, CSS, Javascript, React, Redux, Express, PostgreSQL.",
  },
  {
    image: VideoGamesApp,
    titulo: "Videogames App",
    texto:
      "Este proyecto fue realizado de manera individual,consumiendo una api y en base a eso construyendo su respectivo backend con sus rutas protegidas, base de datos,frontend y reforzando conocimientos con opciones de crear videojuego, filtros combinados, selección por id, responsive design, paginado y mucho más",
    github: "https://github.com/juliilp/Project-Videogames",
    pagina: "https://videogames-pi-lyart.vercel.app/",
    tecnologias: "Html, CSS, Javascript, React, Redux, Express, PostgreSQL.",
  },
];

export default dataProyectos;
