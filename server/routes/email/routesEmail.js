const nodemailer = require("nodemailer");
require("dotenv").config();
const { USER, TO, PASS } = process.env;
const routesEmail = async (req, res) => {
  try {
    const { nombre, email, descripcion } = req.body;
    const config = {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: USER,
        pass: PASS,
      },
    };
    const mensaje = {
      from: USER,
      to: TO,
      subjet: "Mensaje de portafolio",
      // text: "Hola",
      text: `La persona ${nombre} con email ${email} te quiere enviar el mensaje ${descripcion}`,
    };
    let transporter = nodemailer.createTransport(config);

    let info = await transporter.sendMail(mensaje);
    res.send(info);
  } catch (error) {
    res.send(error.mensaje);
  }
};
module.exports = routesEmail;
