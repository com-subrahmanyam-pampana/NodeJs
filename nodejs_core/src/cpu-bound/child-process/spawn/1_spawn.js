const { spawn } = require('child_process');

const child = spawn('node',['test.js']);

/*We can execute command line like "node test.js" with the child process */
//We are passing "node" as the command and test.js in in root folder
//This will run test.js file