const { v4: uuidv4 } = require("uuid");
const { format } = require("date-fns");

module.exports = [
  {
    id: uuidv4(),
    item_name: "string",
    amount: 0,
    date: format(new Date(), "MMMM dd"),
    from: "flossy",
  },
];
