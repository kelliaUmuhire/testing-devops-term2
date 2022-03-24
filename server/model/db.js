const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;

// process.env.MONGO_URI
//connect to MongoDB server
mongoose
  .connect("mongodb://mongo:27017/testing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

module.exports = db;
