
const express = require("express");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
 
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    cluster.fork();
  });
} else {
  const app = express();
  app.get('/sumofn/:n', function (req, res) {
    let number = parseInt((req.params.n).toString());
    let sum = 0;
    for(let i=0;i<=number;i++){
        sum=sum+i;
    }  
    res.send(`Sum of  first ${number} natural numbers is ${sum}`);
    //Time Complexity O(n) where n is the input number
})
  app.listen(3000, () => {
    console.log("App is  listening at 3000")
  });
}