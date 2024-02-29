const express = require("express");
var usersRouter = express.Router();

usersRouter.get("/", function (req, res) {
  res.send("List of  users.");
});

usersRouter.get("/:userId", function (req, res) {
  const user = {
    1: { userName: "test" },
    2: { userName: "D Trump" },
  };
  res.send(user[req.params.userId]);
});

usersRouter.post("/login", function (req, res) {
  res.send("Login Success");
});

usersRouter.post("/signup", function (req, res) {
  res.send("Account Created");
});

usersRouter.get("/logout", function (req, res) {
  res.send("List of  users.");
});

module.exports = usersRouter;
