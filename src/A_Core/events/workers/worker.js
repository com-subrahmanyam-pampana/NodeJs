const {workerData,parentPort} =require('worker_threads');


console.log(workerData)///Prints null
console.log(parentPort)//prints null

/*
Here, the workerData and parentPort are part of Worker Thread. 
The workerData is used for fetching the data from the thread and parentPort is used for manipulating the thread. 
The postMessage() method is used for posting the given message in the console by taking the filename as fetched by workerData.
*/