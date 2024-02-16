/*This program establish a TCP connection and writes 
"hello" to console
*/
const net = require("node:net");

const server = net.createServer(function (socket) {
  socket.write("Hello");
  socket.end();
});

server.listen(3000);
console.log("listening on port 3000");

/*
You need TCP client to test this
1.telnet localhost 3000(works on windows)
2.nc  localhost 3000(works on Mac)
3.netcat localhost 1337
*/
