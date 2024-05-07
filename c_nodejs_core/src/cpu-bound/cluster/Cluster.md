Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads.

# On windows use this command to get process info
tasklist  /fi "pid eq 4444"

Cluster Module:
# Pros:
Simplicity: Using the cluster module allows you to utilize multiple CPU cores on a single machine without the need for additional infrastructure.
Shared Memory: Clustering allows Node.js processes to share the same memory space, which can be beneficial for certain types of applications.
Inter-process Communication: Communication between processes is more straightforward as they are running on the same machine.
 # Cons:
Scalability: Scaling horizontally (across multiple machines) can be more challenging with the cluster module alone.
Single Point of Failure: If the machine running the Node.js processes fails, all instances will be affected.