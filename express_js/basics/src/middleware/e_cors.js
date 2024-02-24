const express = require("express");
const basicAuth = require("express-basic-auth");
const Cookies = require("cookies");
var cors = require('cors')

const app = express();

const port = 3000;


var keys = ["keyboard cat"];

const cookieManager = function (req, res, myNextFunc) {
  const cookies = new Cookies(req, res, { keys: keys });
  var lastVisit = cookies.get("LastVisit", { signed: true });
  if(lastVisit){
    req.lastVisit=lastVisit
  }
  myNextFunc();
};

app.use(cookieManager);
// app.use(cors())


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.get("/",  cors(corsOptions), (req, res) => {
    if(req.lastVisit){
        res.send(" This is the Home Page");
    }else{
         // Set the cookie to a value
         const cookies = new Cookies(req, res, { keys: keys });
         cookies.set("LastVisit", new Date().toISOString(), { signed: true });
         res.send("This is the Login Page");
    }
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
