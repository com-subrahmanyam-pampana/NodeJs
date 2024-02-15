const express = require("express");

const app = express();

const port = 3000;


// GET method route
app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
