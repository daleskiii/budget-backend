const express = require("express");
const transctionsController = require("./Controller/transactions.controller.js");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/transactions", transctionsController);

app.get("/", (req, res) => {
  res.send("Hello, World");
});

module.exports = app;
