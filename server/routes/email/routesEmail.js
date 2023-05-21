const nodemailer = require("nodemailer");
const { user, to, pass } = process.env;
const routesEmail = async (req, res) => {
  const { nombre, email, descripcion } = req.body;
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: user,
      pass: pass,
    },
  };
  const mensaje = {
    from: user,
    to: to,
    subjet: "Mensaje de portafolio",
    text: `La persona ${nombre} con email ${email} te quiere enviar el mensaje ${descripcion}`,
  };
  let transporter = nodemailer.createTransport(config);

  let info = await transporter.sendMail(mensaje);

  res.send(info);
};
module.exports = routesEmail;
