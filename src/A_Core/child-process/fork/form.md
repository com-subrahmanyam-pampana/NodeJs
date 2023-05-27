


Soultion:
1.Adding n natural numbers is the blocking code
2.We need  process the blocking code and also should  accepting incoming requests
3. TTO achieve this we can move the blocking code to a child process  using fork() method. 
4.Create a new module and  move the blocking code into its own module. 
The Node.js server will  create a child process when  we hit n natural numbers API and it   listen for results from this child process.