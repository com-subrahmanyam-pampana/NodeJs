const { spawn } = require('child_process');

const child = spawn('node',['sptest.js']);

//We are passing "node" as the command and sptest.js in in root folder
//This will run sptest.js file