process.on("message",message=>{
    const result=load(message.number);
    process.send(result);
    process.exit()//make sure to use exit().This prevents orphaned process
})

function load(time) {
    /*Note this is a sync and a non-blocking operation operation and it is done by Main Thread 
    of JS */
    /*JS code. */
     /* the event loop will get stuck until the operation finished */
    const start = Date.now();
    while (Date.now() - start < time) {}
    return "Hello!!!"
  }