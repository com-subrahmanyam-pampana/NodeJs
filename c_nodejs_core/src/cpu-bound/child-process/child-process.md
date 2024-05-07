
The Node.js child process module provides the ability to spawn child processes

1.child_process.exec() method: This method runs a command in a console and buffers the output.
2.child_process.spawn() method: This method launches a new process with a given command.
3.child_process.fork() method: This method is a special case of spawn() method to create child processes.

# Child process vs worker threads
What are child processes in Node.js?
Child processes are different from worker threads. While worker threads provide an isolated event loop and V8 runtime in the same process, child processes are separate instances of the entire Node.js runtime. Each child process has its own memory space and communicates with the main process through IPC (inter-process communication) techniques like message streaming or piping (or files, Database, TCP/UDP, etc.).