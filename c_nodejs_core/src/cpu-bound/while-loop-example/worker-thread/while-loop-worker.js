

const { workerData, parentPort } = require('worker_threads')

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"

function load(time) {
    /*Note this is a sync and a non-blocking operation operation and it is done by Main Thread 
    of JS */
    /*JS code. */
     /* the event loop will get stuck until the operation finished */
    const start = Date.now();
    while (Date.now() - start < time) {}
    return "Hello world"
}

parentPort.postMessage({ hello: load(workerData) })

/*
Here, we need two things: the workerData that the main app sent to us and a way to return information to the main app. This is done with the parentPort, which has a postMessage method where we will pass the result of our processing.
*/