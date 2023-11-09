const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ronakasnani5:2RF8V3Z1dr6j0gmQ@cluster0.m5abuce.mongodb.net/?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
