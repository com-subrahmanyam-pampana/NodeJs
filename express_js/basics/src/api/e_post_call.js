/*
express.bodyParser() is no longer bundled as part of express. 
You need to install it separately before loading.
Install body-parser 
*/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.post("/login",(req, res) => {
  if(!req.body){
    console.log("Body is undefined because there is no parser")
  }
  res.end("Body is undefined:No parser");
});

// create a application/json parser
const jsonParser = bodyParser.json();
app.post("/login2", jsonParser, (req, res) => {
  let username = req.body.user;
  let password = req.body.password;
  res.end(`Welcome  ${username}`);
});

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post("/login3", urlencodedParser, (req, res) => {
  let username = req.body.user;
  let password = req.body.password;
  res.end(`Welcome  ${username}`);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
