
var express = require('express');
var app = express();


const { fork } = require('child_process');


app.get('/', function (req, res) {
    res.send("Hello");
})

app.get('/sumofn/:n', function (req, res) {
    let number = parseInt((req.params.n).toString());
    const child = fork(__dirname + '/sum_of_n_natural_numbers');
    child.on('message', (message) => {
        res.send(`Sum of  first ${number} natural numbers is ${message}`);
    });
    child.send('SUM');
})

var server = app.listen(3001, function () {
   console.log("App is  listening at 3001")
})