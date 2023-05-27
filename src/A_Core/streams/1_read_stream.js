var fs=require('fs');

var readable=fs.createReadStream(__dirname+'/greet.txt',{encoding:'utf8'})

readable.on('data',function(chunckData){
    console.log(chunckData)
})