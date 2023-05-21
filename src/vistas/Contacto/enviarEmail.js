import axios from "axios";
const enviarEmail = async (nombre, email, descripcion) => {
  console.log("Email enviado");
  // https://portfoliov2-production.up.railway.app
  const api = await axios.post("http://localhost:3001/email", {
    nombre,
    email,
    descripcion,
  });
  console.log("asd");
  return api;
};
export default enviarEmail;
