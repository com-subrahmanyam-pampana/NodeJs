const express = require("express");
const app = express();

const myLogger1 = function (req, res, myNextFunc) {
  console.log('Time:', Date.now())
  myNextFunc();
};
const myLogger2 = function (req, res, myNextFunc) {
  console.log('Request URL:', req.originalUrl)
  myNextFunc();
};

const myLogger3 = function (req, res, myNextFunc) {
  console.log('Request Type:', req.method)
  myNextFunc();
};

app.use([myLogger1,myLogger2,myLogger3]);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000,()=>{
  console.log("App is listening.....")
});
