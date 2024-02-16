

const WebSocket = require('ws').WebSocket;

const ws = new WebSocket('ws://localhost:3001');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
  ws.send('I am client');
});