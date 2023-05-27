let datagram=require('dgram');

var server=datagram.createSocket('udp4');

server.on('message',function(message){
    console.log(message)
});

server.on('listening',function(){
    console.log("Listening...")
});
server.bind(3000)

//echo hi |nc -u 0.0.0.0 3000
