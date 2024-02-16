var fs=require('fs');

/*Data comes as a stream */
/*We need to collect all streams an make a complte file */
/*Use Write stream */
var bufferSize=2
var readable=fs.createReadStream(__dirname+'/greet.txt',{encoding:'utf8',highWaterMark:bufferSize*1024})
var writble=fs.createWriteStream(__dirname+'/greetCopy.txt');
readable.on('data',function(chunckData){
    console.log(chunckData)
    writble.write(chunckData)
})