//* DEPENDENCIES
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

//* CONFIG
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

//* MIDDLEWARE
mongoose.connect(MONGODB_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongoose at " + MONGODB_URI);
});

app.get("/api/holidays", (req, res) => {
  res.send("it's working!");
});

app.listen(port, () => {
  console.log("listening on port: " + port);
});
