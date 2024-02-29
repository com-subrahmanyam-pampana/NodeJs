const express = require("express");
const routeManager = require("./apis/index");

var app = express();

const port = 3000;

routeManager(app);

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
