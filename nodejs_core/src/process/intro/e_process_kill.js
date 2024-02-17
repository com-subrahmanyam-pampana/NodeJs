

const t=4000;
const thisProcessId=process.pid;
const mycallBack=()=>{
    console.log(process.kill(thisProcessId))
}
setInterval(mycallBack,t);

/*This application exits automatically "t" milliseconds*/
