
var fs =require('fs')
var zlib = require('zlib'); 

var readable=fs.createReadStream(__dirname+'/greet.txt');
/* Compress the  greet.txt to greet.txt.gz  */
readable  
  .pipe(zlib.createGzip()) //This will compress the file 
  .pipe(fs.createWriteStream(__dirname+'greet.txt.gz'));  //This will write the compressed file to storage
console.log("File Compressed.");  