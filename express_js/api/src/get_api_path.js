const express = require("express");

const app = express();

const port = 3000;

app.get("/english", (req, res) => {
  res.send("Good Morning");
});

app.get("/germany", (req, res) => {
  res.send("Guten Morgen");
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
