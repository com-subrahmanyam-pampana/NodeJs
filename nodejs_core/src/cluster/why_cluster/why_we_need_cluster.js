
const express = require("express");
const app = express();

app.get("/slow", (req, res) => {
  load(5000);
  res.send("I took 5 seconds");
});

app.get("/fast", (req, res) => {
  res.send("I am fast");
});

function load(time) {
  /*Note this is a sync and a non-blocking operation operation and it is done by Main Thread 
  of JS */
  /*JS code. */
   /* the event loop will get stuck until the operation finished */
  const start = Date.now();
  while (Date.now() - start < time) {}
}
app.listen(3000);