/*We added timer in the code because ,process id 
exist until we kill the node app.If you don't add this 
application exits and process also ends.
*/


console.log(process.pid);
const mycallBack=()=>{
    console.log("Hello!!!")
}
setInterval(mycallBack,4000);


/*
Windows:
tasklist  /fi "pid eq 4444"
*/
//

