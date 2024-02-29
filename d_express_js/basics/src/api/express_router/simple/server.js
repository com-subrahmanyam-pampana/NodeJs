
const birds = require('./birds_router')

const express = require("express");

const app = express();

const port = 3000;

app.use('/birds', birds)


app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
