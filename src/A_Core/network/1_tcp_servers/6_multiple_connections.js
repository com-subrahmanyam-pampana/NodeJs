
let net=require('net');
let server=net.createServer();
let sockets=[];

/*When ever a new perosn joins we inform this to other clients  */
server.on('connection',function(socket){
    socket.write("Welcome \n")
    sockets.forEach(function(otherSocker){
        otherSocker.write("New person joined \n")
    });
    sockets.push(socket);
}); 
server.listen(3000);