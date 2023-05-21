import axios from "axios";
const enviarEmail = async (nombre, email, descripcion) => {
  console.log("Email enviado");
  const api = await axios.post(
    "https://portfoliov2-production.up.railway.app/email",
    { nombre, email, descripcion }
  );
  console.log("asd");
  return api;
};
export default enviarEmail;
