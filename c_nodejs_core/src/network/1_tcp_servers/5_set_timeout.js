let net = require("net");

let server = net.createServer();

server.on("connection", function (socket) {
  socket.setTimeout(6000);
});

server.on("timeout", function (socket) {
  console.log("Closing connection as there are no clients");
});

server.listen(3000);
