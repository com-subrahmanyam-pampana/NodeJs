var cluster = require("node:cluster");
var http = require("node:http");
var process = require("node:process");
var cpus = require("node:os");

const numCPUs = cpus.cpus().length;

if (cluster.isPrimary) {
  /*Primary cluster creats the child cluster */
  console.log(`Primary ${process.pid} is running`);
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}
