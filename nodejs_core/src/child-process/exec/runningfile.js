const exec = require('child_process').exec;  
var path = require('path');
var filename = path.basename('C:\Users\mybat.bat');

exec(filename, (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});  