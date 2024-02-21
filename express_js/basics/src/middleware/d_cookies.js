const express = require("express");
const basicAuth = require("express-basic-auth");
const Cookies = require("cookies");

const app = express();

const port = 3000;

// Optionally define keys to sign cookie values
// to prevent client tampering
var keys = ["keyboard cat"];

const cookieManager = function (req, res, myNextFunc) {
  // Create a cookies object
  const cookies = new Cookies(req, res, { keys: keys });
  // Get a cookie
  var lastVisit = cookies.get("LastVisit", { signed: true });
  if(lastVisit){
    req.lastVisit=lastVisit
  }
  myNextFunc();
  //this function will call the next middleware if any
};

app.use(cookieManager);

app.get("/", (req, res) => {
    if(req.lastVisit){
        res.send("Home Page");
    }else{
         // Set the cookie to a value
         const cookies = new Cookies(req, res, { keys: keys });
         cookies.set("LastVisit", new Date().toISOString(), { signed: true });
         res.send("Login Page");
    }
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
