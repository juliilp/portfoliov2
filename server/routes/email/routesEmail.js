const nodemailer = require("nodemailer");

const routesEmail = async (req, res) => {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "julianlopez43013@gmail.com",
      pass: "irinwicxnzjmjsmj",
    },
  };
  const mensaje = {
    from: "julianlopez43013@gmail.com",
    to: "julianlopez43013@gmail.com",
    subjet: "subjet",
    text: "text",
  };
  let transporter = nodemailer.createTransport(config);

  let info = await transporter.sendMail(mensaje);

  res.send(info);
};
module.exports = routesEmail;
