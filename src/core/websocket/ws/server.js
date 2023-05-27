const WebSocketServer = require('ws').WebSocketServer;

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data.toString());
    ws.send('I am server');
  });

  ws.send('something');
});