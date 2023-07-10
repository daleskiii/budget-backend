const express = require("express");
const route = express.Router();
const { v4: uuidv4 } = require("uuid");
const data = require("../Models/budgetData.js");

route.get("/", (req, res) => {
  res.send(data);
});

route.get("/:id", (req, res) => {
  const { id } = req.params;

  let idMatch = data.find((d) => {
    return d.id === id;
  });
  if (!idMatch) {
    res.status(404).json({
      status: false,
      message: "Id not found!",
    });
  } else {
    res.json({ status: true, data: idMatch });
  }
});

module.exports = route;
