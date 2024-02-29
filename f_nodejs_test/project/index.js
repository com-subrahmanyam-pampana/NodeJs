

const express = require("express");

const app = express();

const port = 3000;


app.get("/", (req, res) => {
  res.send("Hello World");
});


app.get("/wish", (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send("Good Morning");
});

app.get("/user", (req, res) => {
  res.set('Content-Type', 'application/json');
  const user={
    userName:'Subbu',
    userId:1,
    mobile:"1234567890"
  }
  res.send(user);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
