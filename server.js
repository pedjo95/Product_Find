const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Init  app
const app = express();
app.use(express.json());
app.use(cors());

// Ini db
mongoose.connect("mongodb://localhost:27013/nodeapi", {
  useNewUrlParser: true,
});
requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3001);
