const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require("./config/database");

//Handling Uncaught exception

process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Sutting down the server due to uncaught Exception");
    process.exit(1);
});

//config
dotenv.config({
  path: "backend/config/config.env",
});

//Connected to dataBase
connectDataBase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http/localhost:/${process.env.PORT}`);
});

//unhandled promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Sutting down the server due to unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
