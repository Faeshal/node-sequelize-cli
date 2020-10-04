require("pretty-error").start();
const express = require("express");
const app = express();
const PORT = 2000;
const chalk = require("chalk");
const morgan = require("morgan");
// const authRoutes = require("./routes/auth");
// const sequelize = require("./models/index");

// *  Logger & Parser
app.use(morgan("dev"));
app.use(express.json());

// * Routing
app.get("/", (req, res, next) => {
  res.send({ succes: true, message: "Hello From Express" });
});
// app.use("/api", countryRoutes);

// * Database
// (async () => {
//   try {
//     await sequelize.sync();
//     console.log(chalk.blue("MySQL Connected"));
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

// * Server Listen
app.listen(PORT, (err) => {
  if (err) {
    console.log(chalk.red.inverse(`Error : ${err}`));
  }
  console.log(chalk.black.bgGreen(`Server is Running On Port : ${PORT}`));
});