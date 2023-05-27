//We added timer in the code because ,process id 
//exist until we kill the node app
console.log(process.pid);
const mycallBack=()=>{
    console.log("Hello!!!")
}
setInterval(mycallBack,1);


/*
Windows:
tasklist  /fi "pid eq 4444"
*/
//

