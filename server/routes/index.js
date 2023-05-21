const routes = require("express").Router();
const routesEmail = require("./email/routesEmail");
routes.use("/email", routesEmail);

module.exports = routes;
