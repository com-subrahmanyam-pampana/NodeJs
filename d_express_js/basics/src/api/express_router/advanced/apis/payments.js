const express = require("express");
var paymentsRouter = express.Router();

paymentsRouter.get("/", function (req, res) {
  res.send("Payments");
});

paymentsRouter.get("/balance", function (req, res) {
  res.send("User balance is 100 $");
});

paymentsRouter.post("/add", function (req, res) {
  res.send("Money added to user account");
});

paymentsRouter.post("/withdraw", function (req, res) {
  res.send("User balance after withdraw is 50$");
});

module.exports = paymentsRouter;
