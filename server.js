require("pretty-error").start();
const express = require("express");
const app = express();
const PORT = 2000;
const chalk = require("chalk");
const morgan = require("morgan");
const countryRoutes = require("./routes/country");
const authRoutes = require("./routes/auth");

// *  Logger & Parser
app.use(morgan("dev"));
app.use(express.json());

// * Routing
app.get("/", (req, res, next) => {
  res.send({ succes: true, message: "Hello From Express" });
});
app.use(authRoutes);
app.use(countryRoutes);

// * Server Listen
app.listen(PORT, (err) => {
  if (err) {
    console.log(chalk.red.inverse(`Error : ${err}`));
  }
  console.log(chalk.black.bgGreen(`Server is Running On Port : ${PORT}`));
});
