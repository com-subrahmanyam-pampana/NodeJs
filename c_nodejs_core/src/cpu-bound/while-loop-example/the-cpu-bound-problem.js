
const express = require("express");
const app = express();
const axios = require('axios');


/*Simple API:With constant amount of work */
app.get("/fast", (req, res) => {
  res.send("I am fast");
});

/*API:CPU bound work */
app.get("/cpu", (req, res) => {
  const start = Date.now();
  while (Date.now() - start < 5000) { }
  res.send("I took 5 seconds");
});

app.get("/io", (req, res) => {
  axios.get('https://reqres.in/api/users?page=2')
  .then(function (response) {
    res.send("Network call success");
  })
  .catch(function (error) {
    console.log(error);
  })
});

app.listen(3000);