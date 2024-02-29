
console.log(`Process Architecture: ${process.arch}`);  
console.log(`Process PID: ${process.pid}`); 
console.log(`Process Platform: ${process.platform}`);  
console.log(`Process Version: ${process.version}`);  
/*Memory usage 
returns an object having information of memory usage.
*/
console.log(`Current time = ${process.memoryUsage().external}`);
console.log(`Current time = ${process.memoryUsage().heapTotal}`)
console.log(`Current time = ${process.memoryUsage().rss}`)

console.log(`Current time = ${process.hrtime()}`)


/*Prints the current working directory */
console.log(`Current Working Directory = ${process.cwd()}`)


//Return the number of seconds the node has been running
console.log(process.uptime());


/*
 search it in the OS  for process
 Mac=Activity monitor 
*/