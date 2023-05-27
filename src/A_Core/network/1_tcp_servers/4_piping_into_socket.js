let net=require('net');
let fs=require('fs')

let server=net.createServer();

server.on('connection',function(socket){
  let readstream=fs.createReadStream(__dirname+'/greet.txt','utf8');
  console.log(readstream);
  readstream.pipe(socket,{end:false});
  //If end=true,server will be closed after data pipe operation
}); 

server.listen(3000);