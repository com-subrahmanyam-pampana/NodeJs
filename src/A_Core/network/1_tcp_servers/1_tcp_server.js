var net=require('net');

net.createServer(function(socket){
      socket.write('Hello')
}).listen(3000);

//telnet localhost 3000