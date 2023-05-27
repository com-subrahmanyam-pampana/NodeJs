const exec = require('child_process').exec;  
var path = require('path');
var filename = path.basename('C:\Users\subbu\OneDrive\Documents\PublicRepos\nodejs\src\child-process\exec\mybat.bat');

exec(filename, (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});  