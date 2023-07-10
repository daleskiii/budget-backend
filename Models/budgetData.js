const { v4: uuidv4 } = require("uuid");

module.exports = [
  {
    id: uuidv4(),
    item_name: "string",
    amount: 0,
    date: new Date().toDateString(),
    from: "flossy",
  },
];
