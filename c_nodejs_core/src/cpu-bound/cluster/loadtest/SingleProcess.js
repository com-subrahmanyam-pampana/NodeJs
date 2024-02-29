var express = require('express');
var app = express();

app.get('/sumofn/:n', function (req, res) {
    let n = parseInt((req.params.n).toString())
    let sum = 0
    for(let i=0; i<=n;i++) {
        sum=sum+i;
    }  
    res.send(`Sum of  first ${n} natural numbers is ${sum}`);
  //Time Complexity O(n) where n is the input number
})

var server = app.listen(3000, function () {
   console.log("App is  listening at 3000")
})