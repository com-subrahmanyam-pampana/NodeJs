const {
    Worker,
    isMainThread,
    parentPort,
    workerData
} = require("worker_threads");

if (isMainThread) {
    /*check whether the code is running as the main thread. */
    const worker = new Worker(__filename, {workerData: "hello"});
    /*The first parameter given to the Worker constructor is 
    the path to the JavaScript file to execute in the worker. 
    The __filename global can be used for this example, 
    because the same file provides both the main thread and worker 
    thread code. */
    /*The Worker thread's second parameter takes an options object. 
    Within this object, the workerData property lets you pass values 
    through to the worker thread. */
    worker.on("message", msg => console.log(`Worker message received: ${msg}`));
    worker.on("error", err => console.error(error));
    worker.on("exit", code => console.log(`Worker exited with code ${code}.`));
}
else {
    /*When the sample code is run by a worker thread, 
    the isMainThread variable will be false and the 
    else branch will execute. */
    const data = workerData; //hello
    //workerData contains the data received from the main thread
    parentPort.postMessage(`You said \"${data}\".`);
    /*The parentPort export provides an interface to the main thread */
    /*the postMessage() function lets you send data back to the main thread, where it will be reported as a message event. */
}

/*

A new worker is constructed, and hello is passed in as its data.

The code running in the worker accesses its data and passes a new friendly message back to the main thread.

The main thread's event listener picks up the message sent from the worker thread and emits it to the console.

The worker thread has no more code to run, so it exits. The main thread is notified of this by the exit event.
*/