const http = require("http");
/*This  includes the Node.js http module. */

const port = 3000;
const ip = "127.0.0.1";
//The server is set to listen on the  port 3000  and host name: 127.0.0.1

const server = http.createServer((req, res) => {
  res.statusCode = 200; //statusCode property to 200, to indicate a successful response.
  res.setHeader("Content-Type", "text/plane");
  res.end("Hello World"); // we close the response, adding the content as an argument to end()
});

/*The createServer() method of http creates a new HTTP 
server and returns it */

/*
Whenever a new request is received, 
the request event is called, providing two objects: 
a request (an http.IncomingMessage object) and 
a response (an http.ServerResponse object).
*/
server.listen(port, ip, () => {
  console.log(`Server running on ${port}`);
});

/*
 When the server is ready, the callback function is called, 
 in this case informing us that the server is running.
*/
