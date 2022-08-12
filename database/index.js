const mongoose = require("mongoose");
require("dotenv").config();

// Set username and p/w in .env file
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.xpzk8.mongodb.net/MouseFitGGV2?retryWrites=true&w=majority`;

const db = mongoose.connect(mongoURI, {
  useNewURLParser: true,
});

db.then((db) => {
  console.log("Connected to MongoDB!");
}).catch((err) => {
  console.log("There was a problem connecting to Mongo...");
  console.log(err);
});

module.exports = db;
