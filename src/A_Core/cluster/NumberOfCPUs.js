var cpus =require('node:os');
var cluster = require('node:cluster');
var http = require('node:http');
var process = require('node:process');


console.log(cpus.arch());
console.log(cpus.cpus().length);