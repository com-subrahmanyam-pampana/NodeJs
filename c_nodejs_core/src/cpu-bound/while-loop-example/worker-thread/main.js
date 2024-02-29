
const express = require("express");
const { Worker } = require('worker_threads')
const app = express();
const path = require('path')

const mypath=path.join(__dirname, '/while-loop-worker.js');

async  function runService(workerData) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(mypath, { workerData });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      })
    })
  }

app.get("/slow", async (req, res) => {
  const result = await runService(5000)
  res.send("I took 5 seconds");
});

app.get("/fast", (req, res) => {
  res.send("I am fast");
});


app.listen(3000);