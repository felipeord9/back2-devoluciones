const express = require("express");
const cors = require("cors");
const routerApi = require("./v1/routes");
const { config } = require("./config/config");

const { port, host } = config;

const app = express();

/* let corsOptions = {
  origin: 'https://pedidos.granlangostino.net:5515',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
} */

app.use(express.json());
app.use(cors())
//app.use(cors(corsOptions));

routerApi(app)

app.listen(port, host, () => {
  console.log(`Server on http://${host}:${port}`);
});
