import MercadoSolidario from "../assets/mercadosolidario/mercadosolidario.png";
import VideoGamesApp from "../assets/videogamesapp/videogamesapp.png";
import GigabyteImg from "../assets/gigabyteapp/gigabyte.png";
import FoodAppImg from "../assets/foodapp/foodapp.png";
import VeggieBudinessImg from "../assets/veggiebudiness/veggiebudiness.png";
import Ecommerce from "../assets/ecommerce-react/ecommerce-react.png";
import PajarosCaidos from "../assets/pajaroscaidos/pajaroscaidos.png";
import FakeStoreApiImg from "../assets/fake-store-api/fake-store-api.png";
import PixelaApp from "../assets/PixelaApp/PixelaApp.jpeg";
const dataProyectos = [
  {
    image: PajarosCaidos,
    titulo: "Refugio de aves - Pájaros Caidos",
    texto:
      "Este fue un proyecto grupal para un cliente. Ocupé el rol de líder y desarrollador en un equipo de 6 integrantes. Empleamos la metodología Scrum para agilizar. También realicé el maquetado de +25 páginas, me encargué de la lógica y sus formularios.",
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
    titulo: "InnovaWeb",
    image: Ecommerce,
    texto:
      "Este proyecto fue realizado de manera individual, consumiendo una api y tiene panel de admin, responsive design, carrito de compras, creacion de productos siendo solo administrador, sector de favoritos, los datos no se eliminan al recargar la pagina, formularios controlados, filtro de búsqueda, visualización, detalle y especificaciones de cada producto y carteles de alertas y notificaciones",
    github: "https://github.com/juliilp/ecommerce-react",
    pagina: "https://innovaweb.vercel.app/",
    tecnologias: "Html, CSS, Tailwind, Javascript, React",
  },
  {
    titulo: "PixelaApp",
    image: PixelaApp,
    texto:
      "Este proyecto fue realizado de manera individual, especializandome con el localstorage y la actualizacion de componentes en tiempo real, y tiene juegos como un quizz-app y un contador de chinchon creando jugares y sus puntos, así como teniendo una navbar condicional dependiendo el juego ",
    github: "https://github.com/juliilp/quiz-app",
    pagina: "https://pixela-app.vercel.app/",
    tecnologias: "Html, CSS, Tailwind, Javascript, React, Typescript",
  },
  {
    titulo: "Fake-Store-Api",
    image: FakeStoreApiImg,
    texto:
      "Este proyecto es de manera individual con la intención de aprender MongoDB como base de datos y Astro como frontend. Su funcionalidad está especialmente en su backend, donde su único rol del frontend es explicar todas sus rutas del backend, tiene mercadopago, usuarios, productos, rol de admin, páginado, authenticación, relación de esquemas y mucho más",
    github: "https://github.com/juliilp/Project-fake-api",
    pagina: "https://project-fake-api.vercel.app/",
    tecnologias:
      "Html, CSS, Tailwind, Javascript, React, Astro, NodeJS, Express, MongoDB.",
  },
  {
    titulo: "Gigabyte Gallery",
    image: GigabyteImg,
    texto:
      "Este proyecto es una landing page, fue uno de los primeros proyectos realizado solo por mi, no tiene funcionalidad y el objetivo fue aprender nuevas cosas, hacerlo en el menor tiempo posible y probar cosas como clases de CSS globales y reutilizables, desktop first,empezando por lo básico de framer motion, carrousel, librerias de íconos, y muchas otras cosas que se daban en el momento.",
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
