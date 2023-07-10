const express = require("express");
const transctionsController = require("./Controller/transactions.controller.js");
const app = express();

app.use(express.json());
app.use("/transactions", transctionsController);

app.get("/", (req, res) => {
  res.send("Hello, World");
});

module.exports = app;
