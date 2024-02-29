
const express = require("express");
const app = express();
const {fork} =require("child_process")
const path = require('path')


const mypath=path.join(__dirname, '/forkedChild.js');

console.log(mypath)
app.get("/slow", (req, res) => {
  const childProcess=fork(mypath)
  childProcess.send({number:5000})
  childProcess.on("message",message=>{
    res.send("I took 5 seconds");
  })
});

app.get("/fast", (req, res) => {
  res.send("I am fast");
});


app.listen(3000);