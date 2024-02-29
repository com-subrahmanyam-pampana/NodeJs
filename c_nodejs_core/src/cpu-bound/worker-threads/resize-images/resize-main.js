
const {Worker} = require("worker_threads");

const src = process.argv[2];

const sizes = [
{width: 1920},
{width: 1280},
{width: 640}
];

for (const size of sizes) {
const worker = new Worker(
    __dirname + "/resize-worker.js",
    {
        workerData: {
            src,
            ...size
        }
    }
);
}

// Next, place a large image in your working directory and name it image.jpg
//node resize-main.js image.jpg
//You should see all three "Resizing" messages appear instantaneously. The main thread iterates over the requested sizes, creates a new thread for each one, and waits until they complete. This ensures the sizes are generated in parallel, without blocking the main thread.