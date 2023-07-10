const express = require("express");
const transctionsController = require("./Controller/transactions.controller.js");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.use("/transactions", transctionsController);

module.exports = app;
