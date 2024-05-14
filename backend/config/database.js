const mongoose = require("mongoose");

const connectDataBase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`Mongodb connected successfully ${data.connection.host}`);
    })
  
};

module.exports = connectDataBase;
