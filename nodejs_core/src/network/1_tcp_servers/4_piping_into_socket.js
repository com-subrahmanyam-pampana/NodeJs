/*The following program reads text from the file and writes it  */
const net=require('net');
const fs=require('fs')

let server=net.createServer();

server.on('connection',function(socket){
  let readstream=fs.createReadStream(__dirname+'/greet.txt','utf8');
  console.log(readstream);
  readstream.pipe(socket,{end:false});
  //If end=true,server will be closed after data pipe operation
}); 

server.listen(3000);
/*
You need TCP client to test this
1.telnet localhost 3000(works on windows)
2.nc  localhost 3000(works on Mac)
3.netcat localhost 1337
*/