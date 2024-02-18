
const express = require("express");
const app = express();

app.get("/slow", (req, res) => {
  setTimeout(()=>{res.send("I took 5 seconds")},5000)
});
app.get("/fast", (req, res) => {
  res.send("I am fast");
});

app.listen(3000);