const { Worker } = require("worker_threads");

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { workerData });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(
          new Error(`Stopped the Worker Thread with the exit code: ${code}`)
        );
    });
  });
}

async function run() {
  const result = await runService("GeeksForGeeks");
  console.log(result);
}

run().catch((err) => console.error(err));

///Here, the function runService() return a Promise and runs the worker thread. The function run() is used for calling the function runService() and giving the value for workerData.
