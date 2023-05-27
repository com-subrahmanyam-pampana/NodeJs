var fs =require('fs')
var readable=fs.createReadStream(__dirname+'/greet.txt');
var writable=fs.createWriteStream(__dirname+'/greetcopy.txt');
readable.pipe(writable)