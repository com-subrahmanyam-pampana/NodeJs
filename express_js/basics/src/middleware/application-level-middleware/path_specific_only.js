const express = require("express");
const app = express();

const myLogger1 = function (req, res, myNextFunc) {
  console.log('Request URL:', req.originalUrl)
  console.log('ID:', req.params.id)
  myNextFunc();
};


app.use('/user/:id',myLogger1);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user/:id", (req, res) => {
  res.send({"userId":req.params.id});
});

app.listen(3000,()=>{
  console.log("App is listening.....")
});


/*Middle ware works onlt for the path
http://localhost:3000/user/1
http://localhost:3000/user/2.....
*/