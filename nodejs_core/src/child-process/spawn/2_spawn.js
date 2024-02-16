const { spawn } = require('child_process');

const child = spawn('mkdir',['testdir']);

//This will create a new director in current folder