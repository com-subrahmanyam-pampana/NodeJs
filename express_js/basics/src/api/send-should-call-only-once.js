
const express = require("express");
const app = express();

app.get("/twice", (req, res) => {
  res.send("I took 5 seconds")
  res.send("I took 5 seconds")
});

app.get("/once", (req, res) => {
  res.send("I took 5 seconds")
});

app.listen(3000);

/*
Uncaught Error Error [ERR_HTTP_HEADERS_SENT]: 
Cannot set headers after they are sent to the client
*/