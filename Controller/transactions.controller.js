const express = require("express");
const route = express.Router();
const { v4: uuidv4 } = require("uuid");
const data = require("../Models/budgetData.js");

// CRUD routes with handlers
// get all transactions
route.get("/", (req, res) => {
  res.send(data);
});
// get transactions by id
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
// create new transaction.
route.post("/", (req, res) => {
  const newItem = {
    id: uuidv4(),
    item_name: req.body.item_name,
    amount: req.body.amount,
    date: new Date().toDateString(),
    from: req.body.from,
  };

  if (!newItem) {
    res
      .status(400)
      .json({ status: false, message: "You cannot create an empty item" });
  } else {
    data.push(newItem);

    res.status(201).json({ status: true, data: newItem });
  }
});
// update new transaction
route.put("/:id", (req, res) => {
  const { id } = req.params;
  // checking to see if id from parameter is consitentent with the id given in data.
  console.log("ID:", id);
  console.log("Data:", data);

  const update = data.find((d) => d.id === id);

  if (!update) {
    return res.status(404).json({ message: "Item not found" });
  }

  update.item_name = req.body.item_name;
  update.amount = req.body.amount;
  update.date = req.body.date;
  update.from = req.body.from;

  res.json({ message: "Item was succesfully updated", data: update });
});

// delete transaction
route.delete("/:id", (req, res) => {
  const { id } = req.params;

  const index = data.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  // Remove the item from the data array using splice
  data.splice(index, 1);

  res.json({ message: "Item deleted successfully" });
});

module.exports = route;
