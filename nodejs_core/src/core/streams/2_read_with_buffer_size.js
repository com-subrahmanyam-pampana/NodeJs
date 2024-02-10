var fs=require('fs');

var bufferSize=2
var readable=fs.createReadStream(__dirname+'/bigtext.txt',{encoding:'utf8',highWaterMark:bufferSize*1024})
/*We added buffersize.So entire data is not loaded at once */
/*It loades chunk wise */
/*Each chunk is of (bufferSize*1024B)  */
readable.on('data',function(chunckData){
    console.log(chunckData.length)
    console.log("Data is :")
    console.log(chunckData)
})