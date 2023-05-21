const express = require("express");
const server = express();

const routes = require("../routes/index");
const morgan = require("morgan");
const cors = require("cors");
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use("/", routes);
module.exports = server;
