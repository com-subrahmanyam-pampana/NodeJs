var fs =require('fs')
var greet=fs.readFileSync(__dirname+'/greet.txt','utf8')
//Text data is read into the buffer
console.log(greet)


//Async-event loop
var greet2=fs.readFile(__dirname+'/greet.txt','utf8',function(err,data){
    console.log(greet)
})
greet2