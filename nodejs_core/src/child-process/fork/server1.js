//creating a web server with 2 endpoints.
 //1st end point do a slow computation that blocks the Node.js process.
 // 2nd endpoint will return a Hello world

var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.send("Hello");
})

app.get('/sumofn/:n', function (req, res) {
    let number = parseInt((req.params.n).toString());
    let sum = 0;
    for(let i=0;i<=number;i++){
        sum=sum+i;
    }  
    res.send(`Sum of  first ${number} natural numbers is ${sum}`);
    //Time Complexity O(n) where n is the input number
})

var server = app.listen(3001, function () {
   console.log("App is  listening at 3001")
})