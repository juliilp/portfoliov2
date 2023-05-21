const routes = require("express").Router();
const nada = require("./nada/nada");
const routesEmail = require("./email/routesEmail");
routes.use("/", nada);
routes.use("/email", routesEmail);

module.exports = routes;
