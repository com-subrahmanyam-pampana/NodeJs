const express = require("express");
const app = express();

const myLogger = function (req, res, myNextFunc) {
  console.log("LOGGED");
  myNextFunc();
  //this function will call the next middleware if any
};

app.use(myLogger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000,()=>{
  console.log("App is listening.....")
});
