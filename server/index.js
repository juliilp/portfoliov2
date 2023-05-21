const server = require("./src/app");
const routes = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
server.use(morgan("dev"));
server.use(cors());
server.use("/", routes);
server.listen(3001, () => {
  console.log("Server funcionando");
});
