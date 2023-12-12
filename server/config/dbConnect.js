const mongoose = require("mongoose");

const db_connect = () => {
  mongoose
    .connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
    .then(() => console.log("Connection Db !"))
    .catch((err) => console.log("error:", err));
};





module.exports = db_connect;
